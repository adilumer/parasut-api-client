import { BaseModule } from './base-module';

/**
 * EInvoiceModule: Handles all /e_invoices endpoints.
 */
export class EInvoiceModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * Create an e-invoice
   * POST /v4/{company_id}/e_invoices
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/e_invoices`,
      data,
    });
  }

  /**
   * Get a specific e-invoice
   * GET /v4/{company_id}/e_invoices/{id}
   */
  public async show(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/e_invoices/${id}`,
      params,
    });
  }

  /**
   * Show PDF for a specific e-invoice
   * GET /v4/{company_id}/e_invoices/{id}/pdf
   */
  public async showPdf(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/e_invoices/${id}/pdf`,
      params,
      responseType: 'arraybuffer',
    });
  }
}
