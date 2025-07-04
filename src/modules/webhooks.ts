import { BaseModule } from './base-module';

/**
 * WebhooksModule: Handles all /webhooks endpoints.
 */
export class WebhooksModule extends BaseModule {
  constructor(options: any) {
    super(options);
  }

  /**
   * List all webhooks
   * GET /v4/{company_id}/webhooks
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/webhooks`,
      params,
    });
  }

  /**
   * Get a specific webhook
   * GET /v4/{company_id}/webhooks/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/webhooks/${id}`,
      params,
    });
  }

  /**
   * Create a webhook
   * POST /v4/{company_id}/webhooks
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/webhooks`,
      data,
    });
  }

  /**
   * Update a webhook
   * PUT /v4/{company_id}/webhooks/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/${this.companyId}/webhooks/${id}`,
      data,
    });
  }

  /**
   * Delete a webhook
   * DELETE /v4/{company_id}/webhooks/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/${this.companyId}/webhooks/${id}`,
    });
  }
}
