import { BaseModule } from './base-module';

/**
 * EArchiveModule: Handles all /e_archives endpoints.
 */
export class EArchiveModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * Create an e-archive
   * POST /v4/{company_id}/e_archives
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/e_archives`,
      data,
    });
  }

  /**
   * Get a specific e-archive
   * GET /v4/{company_id}/e_archives/{id}
   */
  public async show(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/e_archives/${id}`,
      params,
    });
  }

  /**
   * Show PDF for a specific e-archive
   * GET /v4/{company_id}/e_archives/{id}/pdf
   */
  public async showPdf(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/e_archives/${id}/pdf`,
      params,
      responseType: 'arraybuffer',
    });
  }
}
