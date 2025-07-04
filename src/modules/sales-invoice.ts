import { BaseModule } from "./base-module";

/**
 * SalesInvoiceModule: Handles all /sales_invoices endpoints for a company.
 */
export class SalesInvoiceModule extends BaseModule {
  
  constructor(options:any) {
    super(options);
  }

  /**
   * List all sales invoices for a company.
   * GET /v4/{company_id}/sales_invoices
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/sales_invoices`,
      params,
    });
  }

  /**
   * Get a sales invoice by ID.
   * GET /v4/{company_id}/sales_invoices/{invoice_id}
   */
  public async get(invoiceId: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/sales_invoices/${invoiceId}`,
      params,
    });
  }

  /**
   * Create a new sales invoice.
   * POST /v4/{company_id}/sales_invoices
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/sales_invoices`,
      data,
    });
  }

  /**
   * Update a sales invoice.
   * PUT /v4/{company_id}/sales_invoices/{invoice_id}
   */
  public async update(invoiceId: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/${this.companyId}/sales_invoices/${invoiceId}`,
      data,
    });
  }

  /**
   * Delete a sales invoice.
   * DELETE /v4/{company_id}/sales_invoices/{invoice_id}
   */
  public async delete(invoiceId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/${this.companyId}/sales_invoices/${invoiceId}`,
    });
  }

  /**
   * List all lines for a sales invoice.
   * GET /v4/{company_id}/sales_invoices/{invoice_id}/lines
   */
  public async listLines(invoiceId: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/sales_invoices/${invoiceId}/lines`,
      params,
    });
  }

  /**
   * Print a sales invoice (PDF).
   * GET /v4/{company_id}/sales_invoices/{invoice_id}/print
   */
  public async print(invoiceId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/sales_invoices/${invoiceId}/print`,
      responseType: 'arraybuffer',
    });
  }

  /**
   * Send a sales invoice by email.
   * POST /v4/{company_id}/sales_invoices/{invoice_id}/send_email
   */
  public async sendEmail(invoiceId: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/sales_invoices/${invoiceId}/send_email`,
      data,
    });
  }

  /**
   * Cancel a sales invoice.
   * PATCH /v4/{company_id}/sales_invoices/{invoice_id}/cancel
   */
  public async cancel(invoiceId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/sales_invoices/${invoiceId}/cancel`,
      data: {},
    });
  }

  /**
   * Archive a sales invoice.
   * PATCH /v4/{company_id}/sales_invoices/{invoice_id}/archive
   */
  public async archive(invoiceId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/sales_invoices/${invoiceId}/archive`,
      data: {},
    });
  }

  /**
   * Unarchive a sales invoice.
   * PATCH /v4/{company_id}/sales_invoices/{invoice_id}/unarchive
   */
  public async unarchive(invoiceId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/sales_invoices/${invoiceId}/unarchive`,
      data: {},
    });
  }

  /**
   * Approve a sales invoice.
   * PATCH /v4/{company_id}/sales_invoices/{invoice_id}/approve
   */
  public async approve(invoiceId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/sales_invoices/${invoiceId}/approve`,
      data: {},
    });
  }
} 