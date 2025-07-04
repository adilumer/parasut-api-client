import { BaseModule } from './base-module';

/**
 * TagsModule: Handles all /tags endpoints.
 */
export class TagsModule extends BaseModule {
  constructor(options: any) {
    super(options);
  }

  /**
   * List all tags
   * GET /v4/{company_id}/tags
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/tags`,
      params,
    });
  }

  /**
   * Get a specific tag
   * GET /v4/{company_id}/tags/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/tags/${id}`,
      params,
    });
  }

  /**
   * Create a tag
   * POST /v4/{company_id}/tags
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/tags`,
      data,
    });
  }

  /**
   * Update a tag
   * PUT /v4/{company_id}/tags/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/${this.companyId}/tags/${id}`,
      data,
    });
  }

  /**
   * Delete a tag
   * DELETE /v4/{company_id}/tags/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/${this.companyId}/tags/${id}`,
    });
  }
}
