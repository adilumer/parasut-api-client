/**
 * CompaniesModule: Handles all /companies endpoints.
 */
export class CompaniesModule {
  private requestOrchestrator: <T = any>(config: {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    url: string;
    data?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
    responseType?: string;
  }) => Promise<T>;

  constructor(requestOrchestrator: CompaniesModule['requestOrchestrator']) {
    this.requestOrchestrator = requestOrchestrator;
  }

  /**
   * List all companies (organizations) accessible to the user.
   * GET /v4/companies
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/companies`,
      params,
    });
  }

  /**
   * Get a company by ID.
   * GET /v4/companies/{company_id}
   */
  public async get(companyId: string, params: Record<string, any> = {}): Promise<any> {
    return this.requestOrchestrator({
      method: 'get',
      url: `/companies/${companyId}`,
      params,
    });
  }

  /**
   * Update a company by ID.
   * PUT /v4/companies/{company_id}
   */
  public async update(companyId: string, data: any): Promise<any> {
    return this.requestOrchestrator({
      method: 'put',
      url: `/companies/${companyId}`,
      data,
    });
  }
} 