import { Account } from '../types';
import { BaseModule } from './base-module';

/**
 * AccountsModule: Handles all /accounts endpoints.
 */
export class AccountsModule extends BaseModule {
  constructor(options:any) {
    super(options);
  }

  /**
   * List all accounts
   * GET /v4/{company_id}/accounts
   */
  public async list(params: Record<string, any> = {}): Promise<any> {
    const xResp: Account[] = await this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/accounts`,
      params,
    });
    return xResp;
  }

  /**
   * Get a specific account
   * GET /v4/{company_id}/accounts/{id}
   */
  public async get(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/accounts/${id}`,
      params,
    });
  }

  /**
   * Create an account
   * POST /v4/{company_id}/accounts
   */
  public async create(data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/accounts`,
      data,
    });
  }

  /**
   * Update an account
   * PUT /v4/{company_id}/accounts/{id}
   */
  public async update(id: string, data: any): Promise<any> {
    return this.authorizedRequest({
      method: 'put',
      url: `/v4/${this.companyId}/accounts/${id}`,
      data,
    });
  }

  /**
   * Delete an account
   * DELETE /v4/{company_id}/accounts/{id}
   */
  public async delete(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'delete',
      url: `/v4/${this.companyId}/accounts/${id}`,
    });
  }

  /**
   * Archive an account
   * PATCH /v4/{company_id}/accounts/{id}/archive
   */
  public async archive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/accounts/${id}/archive`,
    });
  }

  /**
   * Unarchive an account
   * PATCH /v4/{company_id}/accounts/{id}/unarchive
   */
  public async unarchive(id: string): Promise<any> {
    return this.authorizedRequest({
      method: 'patch',
      url: `/v4/${this.companyId}/accounts/${id}/unarchive`,
    });
  }

  /**
   * List transactions for an account
   * GET /v4/{company_id}/accounts/{id}/transactions
   */
  public async listTransactions(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/accounts/${id}/transactions`,
      params,
    });
  }

  /**
   * Get a specific transaction for an account
   * GET /v4/{company_id}/accounts/{id}/transactions/{transaction_id}
   */
  public async getTransaction(id: string, transactionId: string, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'get',
      url: `/v4/${this.companyId}/accounts/${id}/transactions/${transactionId}`,
      params,
    });
  }

  /**
   * @deprecated Use listTransactions instead
   * List transactions for an account
   * GET /v4/{company_id}/accounts/{id}/transactions
   */
  public async transactions(id: string, params: Record<string, any> = {}): Promise<any> {
    return this.listTransactions(id, params);
  }

  /**
   * @deprecated Use getTransaction instead
   * Get a specific transaction for an account
   * GET /v4/{company_id}/accounts/{id}/transactions/{transaction_id}
   */
  public async showTransaction(id: string, transactionId: string, params: Record<string, any> = {}): Promise<any> {
    return this.getTransaction(id, transactionId, params);
  }

  /**
   * Get account details with transactions
   * This is a convenience method that combines account details and transactions
   */
  public async getWithTransactions(id: string, params: Record<string, any> = {}): Promise<any> {
    const [account, transactions] = await Promise.all([
      this.get(id, params),
      this.listTransactions(id, params)
    ]);
    
    return {
      account,
      transactions
    };
  }

  /**
   * Create a debit transaction for an account
   * POST /v4/{company_id}/accounts/{id}/debit_transactions
   */
  public async createDebitTransaction(id: string, data: any, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/accounts/${id}/debit_transactions`,
      data,
      params,
    });
  }

  /**
   * Create a credit transaction for an account
   * POST /v4/{company_id}/accounts/{id}/credit_transactions
   */
  public async createCreditTransaction(id: string, data: any, params: Record<string, any> = {}): Promise<any> {
    return this.authorizedRequest({
      method: 'post',
      url: `/v4/${this.companyId}/accounts/${id}/credit_transactions`,
      data,
      params,
    });
  }
}
