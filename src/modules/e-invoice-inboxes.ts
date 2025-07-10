import { BaseModule } from './base-module';

/**
 * EInvoiceInboxesModule: Handles all /e_invoice_inboxes endpoints.
 */
export class EInvoiceInboxesModule extends BaseModule {

  constructor(options:any) {
    super(options);
  }

  /**
   * List all e-invoice inboxes
   * GET /v4/{company_id}/e_invoice_inboxes
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/e_invoice_inboxes`,
      params,
    });
  }

  /**
   * Get a specific e-invoice inbox
   * GET /v4/{company_id}/e_invoice_inboxes/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/e_invoice_inboxes/${id}`,
      params,
    });
  }
}
