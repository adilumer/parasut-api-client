import { BaseModule } from './base-module';

/**
 * StockUpdatesModule: Handles all /stock_updates endpoints.
 */
export class StockUpdatesModule extends BaseModule {
  constructor(options: any) {
    super(options);
  }

  /**
   * Create a stock update
   * POST /v4/{company_id}/stock_updates
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/stock_updates`,
      data,
    });
  }
}
