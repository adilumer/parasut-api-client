import axios, * as Axios from 'axios';

export class BaseModule {
  
  private baseUrl: string;
  private clientId: string;
  private clientSecret: string;
  private username: string;
  private password: string;
  
  protected axios: Axios.AxiosInstance;
  protected accessToken: string | null = null;
  protected tokenExpiresAt: number = 0;
  protected companyId: string;
  
  constructor(options: any){
    this.companyId = options.companyId ?? options.clientId;
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.username = options.username;
    this.password = options.password;
    this.baseUrl = options.baseUrl || 'https://api.parasut.com/v4';
    this.axios = axios.create({ baseURL: this.baseUrl }); 
  }

  /**
   * Authenticates with Parasut API using OAuth2 password grant.
   * Fetches and caches the access token, refreshing if expired.
   * @private
   * @throws Error if authentication fails
   */
  protected async getAccessToken(): Promise<string> {
    const now = Date.now();
    if (this.accessToken && now < this.tokenExpiresAt) {
      return this.accessToken;
    }
    await this.authenticate();
    if (!this.accessToken) {
      throw new Error('Failed to obtain access token');
    }
    return this.accessToken;
  }

  /**
   * Performs OAuth2 password grant authentication and stores the access token.
   * @private
   * @throws Error if authentication fails or credentials are invalid
   */
  private async authenticate(): Promise<void> {
    // Input validation
    if (!this.clientId || !this.clientSecret || !this.username || !this.password) {
      throw new Error('Missing required authentication credentials');
    }
    try {
      const response = await this.axios.post(
        '/oauth/token',
        {
          grant_type: 'password',
          client_id: this.clientId,
          client_secret: this.clientSecret,
          username: this.username,
          password: this.password,
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
      this.accessToken = access_token;
      this.tokenExpiresAt = Date.now() + (expires_in * 1000) - 60000; // 1 min early
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