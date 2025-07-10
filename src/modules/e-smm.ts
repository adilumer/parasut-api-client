import { BaseModule } from './base-module';

/**
 * ESmmModule: Handles all /e_smm endpoints.
 */
export class ESmmModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * Create an e-smm
   * POST /v4/{company_id}/e_smm
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/e_smm`,
      data,
    });
  }

  /**
   * Get a specific e-smm
   * GET /v4/{company_id}/e_smm/{id}
   */
  public async show(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/e_smm/${id}`,
      params,
    });
  }

  /**
   * Show PDF for a specific e-smm
   * GET /v4/{company_id}/e_smm/{id}/pdf
   */
  public async showPdf(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/e_smm/${id}/pdf`,
      params,
      responseType: 'arraybuffer',
    });
  }
}
