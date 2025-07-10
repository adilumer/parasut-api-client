import { BaseModule } from './base-module';

/**
 * WarehousesModule: Handles all /warehouses endpoints.
 */
export class WarehousesModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * List all warehouses
   * GET /v4/{company_id}/warehouses
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/warehouses`,
      params,
    });
  }

  /**
   * Get a specific warehouse
   * GET /v4/{company_id}/warehouses/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/warehouses/${id}`,
      params,
    });
  }

  /**
   * Create a warehouse
   * POST /v4/{company_id}/warehouses
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/warehouses`,
      data,
    });
  }

  /**
   * Update a warehouse
   * PUT /v4/{company_id}/warehouses/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/${this.companyId}/warehouses/${id}`,
      data,
    });
  }

  /**
   * Delete a warehouse
   * DELETE /v4/{company_id}/warehouses/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/v4/${this.companyId}/warehouses/${id}`,
    });
  }
}
