import { BaseModule } from './base-module';

/**
 * TrackableJobsModule: Handles all /trackable_jobs endpoints.
 */
export class TrackableJobsModule extends BaseModule {
  constructor(options: any) {
    super(options);
  }

  /**
   * Get a specific trackable job
   * GET /v4/{company_id}/trackable_jobs/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/${this.companyId}/trackable_jobs/${id}`,
      params,
    });
  }
}
