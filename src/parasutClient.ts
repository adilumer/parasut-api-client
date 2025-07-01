import axios, * as Axios from 'axios';
import { SalesOfferModule } from './modules/sales-offer';
import { SalesInvoiceModule } from './modules/sales-invoice';

/**
 * Parasut API Client
 * Implements all endpoints from https://apidocs.parasut.com/#
 *
 * Usage:
 *   const client = new ParasutClient({ ... });
 *   await client.getCompanies();
 */
export class ParasutClient {
  protected axios: Axios.AxiosInstance;
  private clientId: string;
  private clientSecret: string;
  private username: string;
  private password: string;
  private baseUrl: string;
  protected accessToken: string | null = null;
  protected tokenExpiresAt: number = 0;
  public salesOffer: SalesOfferModule;
  public salesInvoice: SalesInvoiceModule;

  /**
   * @param options - Parasut API credentials and options
   * @param options.clientId - OAuth client ID
   * @param options.clientSecret - OAuth client secret
   * @param options.username - Parasut username (email)
   * @param options.password - Parasut password
   * @param options.baseUrl - API base URL (default: 'https://api.parasut.com/v4')
   */
  constructor(options: {
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
    baseUrl?: string;
  }) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.username = options.username;
    this.password = options.password;
    this.baseUrl = options.baseUrl || 'https://api.parasut.com/v4';
    this.axios = axios.create({ baseURL: this.baseUrl });
    this.salesOffer = new SalesOfferModule(this.requestOrchestrator.bind(this));
    this.salesInvoice = new SalesInvoiceModule(this.requestOrchestrator.bind(this));
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
   * Fetches the API HOME endpoint, which provides API entry point and available resources.
   * https://apidocs.parasut.com/#/introduction
   * @returns The API home response (entry point and links to resources)
   * @throws Error if the request fails or authentication is invalid
   */
  public async getApiHome(): Promise<any> {
    const token = await this.getAccessToken();
    try {
      const response = await this.axios.get('/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`API HOME request failed: ${error.response.status} ${error.response.statusText}`);
      }
      throw new Error(`API HOME request error: ${error.message}`);
    }
  }

  /**
   * Orchestrates HTTP requests, handling authorization and token refresh.
   * @param config - Request config: method, url, data, params, headers, responseType
   */
  private async requestOrchestrator<T = any>(config: {
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

  // ... methods to be implemented ...
}
