import { BaseModule } from './base-module';

/**
 * ItemCategoriesModule: Handles all /item_categories endpoints.
 */
export class ItemCategoriesModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * List all item categories
   * GET /v4/{company_id}/item_categories
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/item_categories`,
      params,
    });
  }

  /**
   * Get a specific item category
   * GET /v4/{company_id}/item_categories/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/item_categories/${id}`,
      params,
    });
  }

  /**
   * Create an item category
   * POST /v4/{company_id}/item_categories
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/item_categories`,
      data,
    });
  }

  /**
   * Update an item category
   * PUT /v4/{company_id}/item_categories/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/${this.companyId}/item_categories/${id}`,
      data,
    });
  }

  /**
   * Delete an item category
   * DELETE /v4/{company_id}/item_categories/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/v4/${this.companyId}/item_categories/${id}`,
    });
  }
}
