/**
 * SalesInvoiceModule: Handles all /sales_invoices endpoints for a company.
 */
export class SalesInvoiceModule {
  private requestOrchestrator: <T = any>(config: {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    url: string;
    data?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
    responseType?: string;
  }) => Promise<T>;

  constructor(requestOrchestrator: SalesInvoiceModule['requestOrchestrator']) {
    this.requestOrchestrator = requestOrchestrator;
  }

  /**
   * List all sales invoices for a company.
   * GET /v4/{company_id}/sales_invoices
   */
  public async list(companyId: string, params: Record<string, any> = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/${companyId}/sales_invoices`,
      params,
    });
  }

  /**
   * Get a sales invoice by ID.
   * GET /v4/{company_id}/sales_invoices/{invoice_id}
   */
  public async get(companyId: string, invoiceId: string, params: Record<string, any> = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/${companyId}/sales_invoices/${invoiceId}`,
      params,
    });
  }

  /**
   * Create a new sales invoice.
   * POST /v4/{company_id}/sales_invoices
   */
  public async create(companyId: string, data: any): Promise<any> {
    return this.requestOrchestrator({
      method: 'post',
      url: `/${companyId}/sales_invoices`,
      data,
    });
  }

  /**
   * Update a sales invoice.
   * PUT /v4/{company_id}/sales_invoices/{invoice_id}
   */
  public async update(companyId: string, invoiceId: string, data: any): Promise<any> {
    return this.requestOrchestrator({
      method: 'put',
      url: `/${companyId}/sales_invoices/${invoiceId}`,
      data,
    });
  }

  /**
   * Delete a sales invoice.
   * DELETE /v4/{company_id}/sales_invoices/{invoice_id}
   */
  public async delete(companyId: string, invoiceId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'delete',
      url: `/${companyId}/sales_invoices/${invoiceId}`,
    });
  }

  /**
   * List all lines for a sales invoice.
   * GET /v4/{company_id}/sales_invoices/{invoice_id}/lines
   */
  public async listLines(companyId: string, invoiceId: string, params: Record<string, any> = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/${companyId}/sales_invoices/${invoiceId}/lines`,
      params,
    });
  }

  /**
   * Print a sales invoice (PDF).
   * GET /v4/{company_id}/sales_invoices/{invoice_id}/print
   */
  public async print(companyId: string, invoiceId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/${companyId}/sales_invoices/${invoiceId}/print`,
      responseType: 'arraybuffer',
    });
  }

  /**
   * Send a sales invoice by email.
   * POST /v4/{company_id}/sales_invoices/{invoice_id}/send_email
   */
  public async sendEmail(companyId: string, invoiceId: string, data: any): Promise<any> {
    return this.requestOrchestrator({
      method: 'post',
      url: `/${companyId}/sales_invoices/${invoiceId}/send_email`,
      data,
    });
  }

  /**
   * Cancel a sales invoice.
   * PATCH /v4/{company_id}/sales_invoices/{invoice_id}/cancel
   */
  public async cancel(companyId: string, invoiceId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'patch',
      url: `/${companyId}/sales_invoices/${invoiceId}/cancel`,
      data: {},
    });
  }

  /**
   * Archive a sales invoice.
   * PATCH /v4/{company_id}/sales_invoices/{invoice_id}/archive
   */
  public async archive(companyId: string, invoiceId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'patch',
      url: `/${companyId}/sales_invoices/${invoiceId}/archive`,
      data: {},
    });
  }

  /**
   * Unarchive a sales invoice.
   * PATCH /v4/{company_id}/sales_invoices/{invoice_id}/unarchive
   */
  public async unarchive(companyId: string, invoiceId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'patch',
      url: `/${companyId}/sales_invoices/${invoiceId}/unarchive`,
      data: {},
    });
  }

  /**
   * Approve a sales invoice.
   * PATCH /v4/{company_id}/sales_invoices/{invoice_id}/approve
   */
  public async approve(companyId: string, invoiceId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'patch',
      url: `/${companyId}/sales_invoices/${invoiceId}/approve`,
      data: {},
    });
  }
} 