import { BaseModule } from './base-module';

/**
 * BankFeesModule: Handles all /bank_fees endpoints.
 */
export class BankFeesModule extends BaseModule {

  constructor(options:any) {
    super(options);
  }

  /**
   * List all bank fees
   * GET /v4/{company_id}/bank_fees
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/bank_fees`,
      params,
    });
  }

  /**
   * Get a specific bank fee
   * GET /v4/{company_id}/bank_fees/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/bank_fees/${id}`,
      params,
    });
  }

  /**
   * Create a new bank fee
   * POST /v4/{company_id}/bank_fees
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/bank_fees`,
      data,
    });
  }

  /**
   * Update a bank fee
   * PUT /v4/{company_id}/bank_fees/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/${this.companyId}/bank_fees/${id}`,
      data,
    });
  }

  /**
   * Delete a bank fee
   * DELETE /v4/{company_id}/bank_fees/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/v4/${this.companyId}/bank_fees/${id}`,
    });
  }

  /**
   * Archive a bank fee
   * PATCH /v4/{company_id}/bank_fees/{id}/archive
   */
  public async archive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/bank_fees/${id}/archive`,
    });
  }

  /**
   * Unarchive a bank fee
   * PATCH /v4/{company_id}/bank_fees/{id}/unarchive
   */
  public async unarchive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/bank_fees/${id}/unarchive`,
    });
  }
}
