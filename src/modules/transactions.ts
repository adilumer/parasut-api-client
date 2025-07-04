import { BaseModule } from './base-module';

/**
 * TransactionsModule: Handles all /transactions endpoints.
 */
export class TransactionsModule extends BaseModule {
  constructor(options: any) {
    super(options);
  }

  /**
   * Get a specific transaction
   * GET /v4/{company_id}/transactions/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/transactions/${id}`,
      params,
    });
  }

  /**
   * Update a transaction
   * PUT /v4/{company_id}/transactions/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/${this.companyId}/transactions/${id}`,
      data,
    });
  }

  /**
   * Delete a transaction
   * DELETE /v4/{company_id}/transactions/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/${this.companyId}/transactions/${id}`,
    });
  }
}
