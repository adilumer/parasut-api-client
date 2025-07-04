import { BaseModule } from './base-module';

/**
 * ContactsModule: Handles all /contacts endpoints.
 */
export class ContactsModule extends BaseModule {

  constructor(options: any) {
    super(options);
  }

  /**
   * List all contacts
   * GET /v4/{company_id}/contacts
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/contacts`,
      params,
    });
  }

  /**
   * Get a specific contact
   * GET /v4/{company_id}/contacts/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/contacts/${id}`,
      params,
    });
  }

  /**
   * Create a new contact
   * POST /v4/{company_id}/contacts
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/contacts`,
      data,
    });
  }

  /**
   * Update a contact
   * PUT /v4/{company_id}/contacts/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/${this.companyId}/contacts/${id}`,
      data,
    });
  }

  /**
   * Delete a contact
   * DELETE /v4/{company_id}/contacts/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/${this.companyId}/contacts/${id}`,
    });
  }

  /**
   * Archive a contact
   * PATCH /v4/{company_id}/contacts/{id}/archive
   */
  public async archive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/contacts/${id}/archive`,
    });
  }

  /**
   * Unarchive a contact
   * PATCH /v4/{company_id}/contacts/{id}/unarchive
   */
  public async unarchive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/contacts/${id}/unarchive`,
    });
  }
}
