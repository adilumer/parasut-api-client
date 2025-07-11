import axios from 'axios';
type AxiosInstance = ReturnType<typeof axios.create>;

export class BaseModule {
  private static credStore:{
    [key:string]: {
      accessToken?: string;
      tokenExpiresAt: number;
      companyId: string;
      clientId: string;
      clientSecret: string;
      username: string;
      password: string;
      baseUrl: string;
    }
  } = {};
  
  private xid: number|string;
  private baseUrl: string;  
  
  protected axios: AxiosInstance;
  protected accessToken: string | null = null;
  protected tokenExpiresAt: number = 0;
  protected companyId: string;
  
  public onTokenReceived: Function | null = null;
  constructor(options: any){
    this.onTokenReceived = options.onTokenReceived || null;
    this.xid = options.xid;
    this.companyId = options.companyId;
    this.baseUrl = options.baseUrl || 'https://api.parasut.com';
    this.axios = axios.create({ 
      baseURL: this.baseUrl
     }); 

    BaseModule.credStore[this.xid] = {
      accessToken: undefined,
      tokenExpiresAt: 0,
      companyId: this.companyId,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      username: options.username,
      password: options.password,
      baseUrl: this.baseUrl,
    };
  }

  public static updateToken(token: string, expiresAt: number, xid:string|number): void {
    if (!BaseModule.credStore[xid]) {
      throw new Error(`No credentials found for xid: ${xid}`);
    }
    BaseModule.credStore[xid].accessToken = token;
    BaseModule.credStore[xid].tokenExpiresAt = expiresAt;
  }

  /**
   * Authenticates with Parasut API using OAuth2 password grant.
   * Fetches and caches the access token, refreshing if expired.
   * @private
   * @throws Error if authentication fails
   */
  protected async getAccessToken(): Promise<string> {
    const now = Date.now();
    if (BaseModule.credStore[this.xid]?.accessToken && now < BaseModule.credStore[this.xid]?.tokenExpiresAt) {
      return BaseModule.credStore[this.xid]?.accessToken!;
    }
    await this.authenticate();
    if (!BaseModule.credStore[this.xid]?.accessToken) {
      throw new Error('Failed to obtain access token');
    }
    return BaseModule.credStore[this.xid]?.accessToken!;
  }

  /**
   * Performs OAuth2 password grant authentication and stores the access token.
   * @private
   * @throws Error if authentication fails or credentials are invalid
   */
  private async authenticate(): Promise<void> {
    // Input validation
    if (!BaseModule.credStore[this.xid]?.clientId || !BaseModule.credStore[this.xid]?.clientSecret || !BaseModule.credStore[this.xid]?.username || !BaseModule.credStore[this.xid]?.password) {
      throw new Error('Missing required authentication credentials');
    }

    try {
      const response = await this.axios.post(
        '/oauth/token',
        {
          grant_type: 'password',
          client_id: BaseModule.credStore[this.xid]?.clientId,
          client_secret: BaseModule.credStore[this.xid]?.clientSecret,
          username: BaseModule.credStore[this.xid]?.username,
          password: BaseModule.credStore[this.xid]?.password,
        },
        {
          baseURL: this.baseUrl,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const { access_token, expires_in } = response.data as any;
      if (!access_token || !expires_in) {
        throw new Error('Invalid authentication response');
      }
      
      BaseModule.credStore[this.xid].accessToken = access_token;
      BaseModule.credStore[this.xid].tokenExpiresAt = Date.now() + (expires_in * 1000) - 60000; // 1 min early
      this.onTokenReceived?.(access_token, BaseModule.credStore[this.xid].tokenExpiresAt, this.xid);
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Authentication failed: ${error.response.status} ${error.response.statusText}`);
      }
      throw new Error(`Authentication error: ${error.message}`);
    }
  }

  /**
   * Orchestrates HTTP requests, handling authorization and token refresh.
   * @param config - Request config: method, url, data, params, headers, responseType
   */
  protected async authorizedRequest<T = any>(config: {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    url: string;
    data?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
    responseType?: string;
  }): Promise<T> {
    const token = await this.getAccessToken();

    console.log(`[${this.xid}] Making request: ${config.method.toUpperCase()} ${config.url} with token: ${token}`);
    const headers = {
      Authorization: `Bearer ${token}`,
      ...(config.headers || {}),
    };
    try {
      const response = await this.axios.request({
        method: config.method,
        url: config.url,
        data: config.data,
        params: config.params,
        headers,
        responseType: config.responseType,
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Request failed: ${error.response.status} ${error.response.statusText}`);
      }
      throw new Error(`Request error: ${error.message}`);
    }
  }

}