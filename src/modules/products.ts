import { BaseModule } from './base-module';

/**
 * ProductsModule: Handles all /products endpoints.
 */
export class ProductsModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * List all products
   * GET /v4/{company_id}/products
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/products`,
      params,
    });
  }

  /**
   * Get a specific product
   * GET /v4/{company_id}/products/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/products/${id}`,
      params,
    });
  }

  /**
   * Create a product
   * POST /v4/{company_id}/products
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/products`,
      data,
    });
  }

  /**
   * Update a product
   * PUT /v4/{company_id}/products/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/${this.companyId}/products/${id}`,
      data,
    });
  }

  /**
   * Delete a product
   * DELETE /v4/{company_id}/products/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/v4/${this.companyId}/products/${id}`,
    });
  }
}
