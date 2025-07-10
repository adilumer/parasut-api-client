import { BaseModule } from './base-module';

/**
 * StockMovementsModule: Handles all /stock_movements endpoints.
 */
export class StockMovementsModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * List all stock movements
   * GET /v4/{company_id}/stock_movements
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/stock_movements`,
      params,
    });
  }

  /**
   * Create a stock movement
   * POST /v4/{company_id}/stock_movements
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/stock_movements`,
      data,
    });
  }
}
