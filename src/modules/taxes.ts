import { BaseModule } from './base-module';

/**
 * TaxesModule: Handles all /taxes endpoints.
 */
export class TaxesModule extends BaseModule {

  constructor(options:any) {
    super(options);
  }

  /**
   * List all taxes
   * GET /v4/{company_id}/taxes
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/taxes`,
      params,
    });
  }

  /**
   * Get a specific tax
   * GET /v4/{company_id}/taxes/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/taxes/${id}`,
      params,
    });
  }

  /**
   * Create a new tax
   * POST /v4/{company_id}/taxes
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/taxes`,
      data,
    });
  }

  /**
   * Update a tax
   * PUT /v4/{company_id}/taxes/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/${this.companyId}/taxes/${id}`,
      data,
    });
  }

  /**
   * Delete a tax
   * DELETE /v4/{company_id}/taxes/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/v4/${this.companyId}/taxes/${id}`,
    });
  }

  /**
   * Archive a tax
   * PATCH /v4/{company_id}/taxes/{id}/archive
   */
  public async archive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/taxes/${id}/archive`,
    });
  }

  /**
   * Unarchive a tax
   * PATCH /v4/{company_id}/taxes/{id}/unarchive
   */
  public async unarchive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/taxes/${id}/unarchive`,
    });
  }
}
