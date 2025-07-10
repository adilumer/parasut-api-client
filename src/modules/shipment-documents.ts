import { BaseModule } from './base-module';

/**
 * ShipmentDocumentsModule: Handles all /shipment_documents endpoints.
 */
export class ShipmentDocumentsModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * List all shipment documents
   * GET /v4/{company_id}/shipment_documents
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/shipment_documents`,
      params,
    });
  }

  /**
   * Get a specific shipment document
   * GET /v4/{company_id}/shipment_documents/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/shipment_documents/${id}`,
      params,
    });
  }

  /**
   * Create a shipment document
   * POST /v4/{company_id}/shipment_documents
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/shipment_documents`,
      data,
    });
  }

  /**
   * Update a shipment document
   * PUT /v4/{company_id}/shipment_documents/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/${this.companyId}/shipment_documents/${id}`,
      data,
    });
  }

  /**
   * Delete a shipment document
   * DELETE /v4/{company_id}/shipment_documents/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/v4/${this.companyId}/shipment_documents/${id}`,
    });
  }
}
