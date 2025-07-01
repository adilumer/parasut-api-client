import { ParasutClient } from '../parasutClient';

/**
 * SalesOfferModule: Handles all /sales_offers endpoints for a company.
 */
export class SalesOfferModule {
  private requestOrchestrator: <T = any>(config: {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    url: string;
    data?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
    responseType?: string;
  }) => Promise<T>;

  constructor(requestOrchestrator: SalesOfferModule['requestOrchestrator']) {
    this.requestOrchestrator = requestOrchestrator;
  }

  /**
   * List all sales offers for a company.
   */
  public async list(companyId: string, params: Record<string, any> = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/${companyId}/sales_offers`,
      params,
    });
  }

  /**
   * Retrieve a single sales offer by ID.
   */
  public async get(companyId: string, offerId: string, params: Record<string, any> = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/${companyId}/sales_offers/${offerId}`,
      params,
    });
  }

  /**
   * Create a new sales offer.
   */
  public async create(companyId: string, data: any): Promise<any> {
    return this.requestOrchestrator({
      method: 'post',
      url: `/${companyId}/sales_offers`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * Update an existing sales offer.
   */
  public async update(companyId: string, offerId: string, data: any): Promise<any> {
    return this.requestOrchestrator({
      method: 'put',
      url: `/${companyId}/sales_offers/${offerId}`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * Delete a sales offer.
   */
  public async delete(companyId: string, offerId: string): Promise<void> {
    await this.requestOrchestrator({
      method: 'delete',
      url: `/${companyId}/sales_offers/${offerId}`,
    });
  }

  /**
   * List all lines for a sales offer.
   * GET /v4/{company_id}/sales_offers/{offer_id}/lines
   * @param companyId - The company ID
   * @param offerId - The sales offer ID
   * @param params - Optional query parameters
   */
  public async listLines(companyId: string, offerId: string, params: Record<string, any> = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/${companyId}/sales_offers/${offerId}/lines`,
      params,
    });
  }

  /**
   * Convert a sales offer to a sales invoice.
   * POST /v4/{company_id}/sales_offers/{offer_id}/convert_to_sales_invoice
   * @param companyId - The company ID
   * @param offerId - The sales offer ID
   * @param data - Optional data for conversion (e.g., invoice attributes)
   */
  public async convertToSalesInvoice(companyId: string, offerId: string, data: any = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'post',
      url: `/${companyId}/sales_offers/${offerId}/convert_to_sales_invoice`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * Print a sales offer (PDF download link).
   * GET /v4/{company_id}/sales_offers/{offer_id}/print
   * @param companyId - The company ID
   * @param offerId - The sales offer ID
   * @returns PDF file or download link
   */
  public async print(companyId: string, offerId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/${companyId}/sales_offers/${offerId}/print`,
      responseType: 'arraybuffer',
    });
  }

  /**
   * Cancel a sales offer.
   * PATCH /v4/{company_id}/sales_offers/{offer_id}/cancel
   * @param companyId - The company ID
   * @param offerId - The sales offer ID
   */
  public async cancel(companyId: string, offerId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'patch',
      url: `/${companyId}/sales_offers/${offerId}/cancel`,
    });
  }

  /**
   * Send a sales offer by email.
   * POST /v4/{company_id}/sales_offers/{offer_id}/send_email
   * @param companyId - The company ID
   * @param offerId - The sales offer ID
   * @param data - Email data (e.g., recipient, subject, body)
   */
  public async sendEmail(companyId: string, offerId: string, data: any): Promise<any> {
    return this.requestOrchestrator({
      method: 'post',
      url: `/${companyId}/sales_offers/${offerId}/send_email`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /**
   * Duplicate a sales offer.
   * POST /v4/{company_id}/sales_offers/{offer_id}/duplicate
   */
  public async duplicate(companyId: string, offerId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'post',
      url: `/${companyId}/sales_offers/${offerId}/duplicate`,
    });
  }

  /**
   * Archive a sales offer.
   * PATCH /v4/{company_id}/sales_offers/{offer_id}/archive
   */
  public async archive(companyId: string, offerId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'patch',
      url: `/${companyId}/sales_offers/${offerId}/archive`,
      data: {},
    });
  }

  /**
   * Unarchive a sales offer.
   * PATCH /v4/{company_id}/sales_offers/{offer_id}/unarchive
   */
  public async unarchive(companyId: string, offerId: string): Promise<any> {
    return this.requestOrchestrator({
      method: 'patch',
      url: `/${companyId}/sales_offers/${offerId}/unarchive`,
      data: {},
    });
  }
} 