import { BaseModule } from './base-module';

/**
 * SalariesModule: Handles all /salaries endpoints.
 */
export class SalariesModule extends BaseModule {

  constructor(options: any) {
    super(options);
  }

  /**
   * List all salaries
   * GET /v4/{company_id}/salaries
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/salaries`,
      params,
    });
  }

  /**
   * Get a specific salary
   * GET /v4/{company_id}/salaries/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/salaries/${id}`,
      params,
    });
  }

  /**
   * Create a new salary
   * POST /v4/{company_id}/salaries
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/salaries`,
      data,
    });
  }

  /**
   * Update a salary
   * PUT /v4/{company_id}/salaries/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/${this.companyId}/salaries/${id}`,
      data,
    });
  }

  /**
   * Delete a salary
   * DELETE /v4/{company_id}/salaries/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/${this.companyId}/salaries/${id}`,
    });
  }

  /**
   * Archive a salary
   * PATCH /v4/{company_id}/salaries/{id}/archive
   */
  public async archive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/salaries/${id}/archive`,
    });
  }

  /**
   * Unarchive a salary
   * PATCH /v4/{company_id}/salaries/{id}/unarchive
   */
  public async unarchive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/salaries/${id}/unarchive`,
    });
  }
}
