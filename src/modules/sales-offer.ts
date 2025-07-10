import { BaseModule } from './base-module';

/**
 * SalesOfferModule: Handles all /sales_offers endpoints for a company.
 */
export class SalesOfferModule extends BaseModule {
  
  constructor(options:any) {
    super(options);
  }

  /**
   * List all sales offers for a company.
   * GET /v4/{company_id}/sales_offers
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/sales_offers`,
      params,
    });
  }

  /**
   * Retrieve a single sales offer by ID.
   * GET /v4/{company_id}/sales_offers/{id}
   */
  public async get(offerId: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/sales_offers/${offerId}`,
      params,
    });
  }

  /**
   * Create a new sales offer.
   * POST /v4/{company_id}/sales_offers
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/sales_offers`,
      data,
    });
  }

  /**
   * Update an existing sales offer.
   * PUT /v4/{company_id}/sales_offers/{id}
   */
  public async update(offerId: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/${this.companyId}/sales_offers/${offerId}`,
      data,
    });
  }

  /**
   * Delete a sales offer.
   * DELETE /v4/{company_id}/sales_offers/{id}
   */
  public async delete(offerId: string): Promise<void> {
    await this.authorizedRequest({
      method: 'delete',
      url: `/v4/${this.companyId}/sales_offers/${offerId}`,
    });
  }

  /**
   * Get PDF for a sales offer.
   * GET /v4/{company_id}/sales_offers/{id}/pdf
   */
  public async getPdf(offerId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/sales_offers/${offerId}/pdf`,
      responseType: 'arraybuffer',
    });
  }

  /**
   * Archive a sales offer.
   * PATCH /v4/{company_id}/sales_offers/{id}/archive
   */
  public async archive(offerId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/sales_offers/${offerId}/archive`,
    });
  }

  /**
   * Unarchive a sales offer.
   * PATCH /v4/{company_id}/sales_offers/{id}/unarchive
   */
  public async unarchive(offerId: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/sales_offers/${offerId}/unarchive`,
    });
  }

  /**
   * Get sales offer details.
   * GET /v4/{company_id}/sales_offers/{id}/details
   */
  public async getDetails(offerId: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/sales_offers/${offerId}/details`,
      params,
    });
  }

  /**
   * Update sales offer status.
   * PATCH /v4/{company_id}/sales_offers/{id}/update_status
   */
  public async updateStatus(offerId: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/sales_offers/${offerId}/update_status`,
      data,
    });
  }
} 