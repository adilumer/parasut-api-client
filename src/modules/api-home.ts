import { ParasutClient } from '../parasut-client';
import { BaseModule } from './base-module';

/**
 * SalesOfferModule: Handles all /sales_offers endpoints for a company.
 */
export class ApiHomeModule extends BaseModule {
  
  constructor(options:any) {
    super(options);
  }

  /**
   * Fetches the API HOME endpoint, which provides API entry point and available resources.
   * https://apidocs.parasut.com/#/introduction
   * @returns The API home response (entry point and links to resources)
   * @throws Error if the request fails or authentication is invalid
   */
  public async get(): Promise<any> {
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

} 