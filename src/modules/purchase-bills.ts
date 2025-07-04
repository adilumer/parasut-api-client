import { BaseModule } from './base-module';

/**
 * PurchaseBillsModule: Handles all /purchase_bills endpoints.
 */
export class PurchaseBillsModule extends BaseModule {

  constructor(options: any) {
    super(options);
  }

  /**
   * List all purchase bills
   * GET /v4/{company_id}/purchase_bills
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/purchase_bills`,
      params,
    });
  }

  /**
   * Get a specific purchase bill
   * GET /v4/{company_id}/purchase_bills/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/purchase_bills/${id}`,
      params,
    });
  }

  /**
   * Create a new purchase bill
   * POST /v4/{company_id}/purchase_bills
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/purchase_bills`,
      data,
    });
  }

  /**
   * Update a purchase bill
   * PUT /v4/{company_id}/purchase_bills/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/${this.companyId}/purchase_bills/${id}`,
      data,
    });
  }

  /**
   * Delete a purchase bill
   * DELETE /v4/{company_id}/purchase_bills/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/${this.companyId}/purchase_bills/${id}`,
    });
  }

  /**
   * Archive a purchase bill
   * PATCH /v4/{company_id}/purchase_bills/{id}/archive
   */
  public async archive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/purchase_bills/${id}/archive`,
    });
  }

  /**
   * Unarchive a purchase bill
   * PATCH /v4/{company_id}/purchase_bills/{id}/unarchive
   */
  public async unarchive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/purchase_bills/${id}/unarchive`,
    });
  }
}
