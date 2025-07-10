import { BaseModule } from './base-module';

/**
 * InventoryLevelsModule: Handles all /inventory_levels endpoints.
 */
export class InventoryLevelsModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * List inventory levels for a product
   * GET /v4/{company_id}/product/{product_id}/inventory_levels
   */
  public async list(productId: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/product/${productId}/inventory_levels`,
      params,
    });
  }
}
