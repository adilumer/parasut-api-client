import { BaseModule } from './base-module';

/**
 * EmployeesModule: Handles all /employees endpoints.
 */
export class EmployeesModule extends BaseModule {

  constructor(options: any) {
    super(options);
  }

  /**
   * List all employees
   * GET /v4/{company_id}/employees
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/employees`,
      params,
    });
  }

  /**
   * Get a specific employee
   * GET /v4/{company_id}/employees/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/employees/${id}`,
      params,
    });
  }

  /**
   * Create a new employee
   * POST /v4/{company_id}/employees
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/${this.companyId}/employees`,
      data,
    });
  }

  /**
   * Update an employee
   * PUT /v4/{company_id}/employees/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/${this.companyId}/employees/${id}`,
      data,
    });
  }

  /**
   * Delete an employee
   * DELETE /v4/{company_id}/employees/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/${this.companyId}/employees/${id}`,
    });
  }

  /**
   * Archive an employee
   * PATCH /v4/{company_id}/employees/{id}/archive
   */
  public async archive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/employees/${id}/archive`,
    });
  }

  /**
   * Unarchive an employee
   * PATCH /v4/{company_id}/employees/{id}/unarchive
   */
  public async unarchive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/${this.companyId}/employees/${id}/unarchive`,
    });
  }
}
