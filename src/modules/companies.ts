import { BaseModule } from "./base-module";

/**
 * CompaniesModule: Handles all /companies endpoints.
 */
export class CompaniesModule extends BaseModule {
  
  constructor(options:any) {
    super(options);
  }


  /**
   * List all companies (organizations) accessible to the user.
   * GET /v4/companies
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/companies`,
      params,
    });
  }

  /**
   * Get a company by ID.
   * GET /v4/companies/{company_id}
   */
  public async get(params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/companies/${this.companyId}`,
      params,
    });
  }

  /**
   * Update a company by ID.
   * PUT /v4/companies/{company_id}
   */
  public async update(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/companies/${this.companyId}`,
      data,
    });
  }
} 