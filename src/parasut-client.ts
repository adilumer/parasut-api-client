import { SalesOfferModule } from './modules/sales-offer';
import { SalesInvoiceModule } from './modules/sales-invoice';
import { CompaniesModule } from './modules/companies';
import { ApiHomeModule } from './modules/api-home';
import { ContactsModule } from './modules/contacts';
import { PurchaseBillsModule } from './modules/purchase-bills';
import { BankFeesModule } from './modules/bank-fees';
import { SalariesModule } from './modules/salaries';
import { TaxesModule } from './modules/taxes';
import { EmployeesModule } from './modules/employees';
import { EInvoiceInboxesModule } from './modules/e-invoice-inboxes';

/**
 * Parasut API Client
 * Implements all endpoints from https://apidocs.parasut.com/#
 *
 * Usage:
 *   const client = new ParasutClient({ ... });
 *   await client.getCompanies();
 */
export class ParasutClient {
  public options: any;

  public salesOffer: SalesOfferModule;
  public salesInvoice: SalesInvoiceModule;
  public companies: CompaniesModule;
  public apiHome: ApiHomeModule;
  public contacts: ContactsModule;
  public purchaseBills: PurchaseBillsModule; 
  public bankFees: BankFeesModule;
  public salaries: SalariesModule;
  public taxes: TaxesModule;
  public employees: EmployeesModule;
  public eInvoiceInboxes: EInvoiceInboxesModule;
  
  /**
   * @param options - Parasut API credentials and options
   * @param options.clientId - OAuth client ID
   * @param options.clientSecret - OAuth client secret
   * @param options.username - Parasut username (email)
   * @param options.password - Parasut password
   * @param options.baseUrl - API base URL (default: 'https://api.parasut.com/v4')
   */
  constructor(options: {
    companyId?: string;
    clientId?: string;
    clientSecret?: string;
    username?: string;
    password?: string;
    baseUrl?: string;
  }) {
    this.options = options;
    
    this.salesOffer = new SalesOfferModule(options);
    this.salesInvoice = new SalesInvoiceModule(options);
    this.companies = new CompaniesModule(options);
    this.apiHome = new ApiHomeModule(options);
    this.contacts = new ContactsModule(options);
    this.purchaseBills = new PurchaseBillsModule(options);
    this.bankFees = new BankFeesModule(options);
    this.salaries = new SalariesModule(options);
    this.taxes = new TaxesModule(options);
    this.employees = new EmployeesModule(options);
    this.eInvoiceInboxes = new EInvoiceInboxesModule(options);
  }

  // ... methods to be implemented ...
}
