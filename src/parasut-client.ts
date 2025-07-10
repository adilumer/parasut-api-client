import { BaseModule } from './modules/base-module';
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
import { EArchiveModule } from './modules/e-archive';
import { EInvoiceModule } from './modules/e-invoice';
import { ESmmModule } from './modules/e-smm';
import { AccountsModule } from './modules/accounts';
import { ProductsModule } from './modules/products';
import { ItemCategoriesModule } from './modules/item-categories';
import { TagsModule } from './modules/tags';
import { WarehousesModule } from './modules/warehouses';
import { TransactionsModule } from './modules/transactions';
import { ShipmentDocumentsModule } from './modules/shipment-documents';
import { StockMovementsModule } from './modules/stock-movements';
import { StockUpdatesModule } from './modules/stock-updates';
import { InventoryLevelsModule } from './modules/inventory-levels';
import { TrackableJobsModule } from './modules/trackable-jobs';
import { WebhooksModule } from './modules/webhooks';
import { Company } from './types';

/**
 * Parasut API Client
 * Implements all endpoints from https://apidocs.parasut.com/#
 *
 * Usage:
 *   const client = new ParasutClient({ ... });
 */
export class ParasutClient {
  public userInfo: any = {};
  public companyList:Array<Company> = [];

  public options: any;

  public salesOffer: SalesOfferModule = new SalesOfferModule({});
  public salesInvoice: SalesInvoiceModule = new SalesInvoiceModule({});
  public companies: CompaniesModule = new CompaniesModule({});
  public apiHome: ApiHomeModule = new ApiHomeModule({});
  public contacts: ContactsModule = new ContactsModule({});
  public purchaseBills: PurchaseBillsModule = new PurchaseBillsModule({}); 
  public bankFees: BankFeesModule = new BankFeesModule({});
  public salaries: SalariesModule = new SalariesModule({});
  public taxes: TaxesModule = new TaxesModule({});
  public employees: EmployeesModule = new EmployeesModule({});
  public eInvoiceInboxes: EInvoiceInboxesModule = new EInvoiceInboxesModule({});
  public eArchive: EArchiveModule = new EArchiveModule({});
  public eInvoice: EInvoiceModule = new EInvoiceModule({});
  public eSmm: ESmmModule = new ESmmModule({});
  public accounts: AccountsModule = new AccountsModule({});
  public products: ProductsModule = new ProductsModule({});
  public itemCategories: ItemCategoriesModule = new ItemCategoriesModule({});
  public tags: TagsModule = new TagsModule({});
  public warehouses: WarehousesModule = new WarehousesModule({});
  public transactions: TransactionsModule = new TransactionsModule({});
  public shipmentDocuments: ShipmentDocumentsModule = new ShipmentDocumentsModule({});
  public stockMovements: StockMovementsModule = new StockMovementsModule({});
  public stockUpdates: StockUpdatesModule = new StockUpdatesModule({});
  public inventoryLevels: InventoryLevelsModule = new InventoryLevelsModule({});
  public trackableJobs: TrackableJobsModule = new TrackableJobsModule({});
  public webhooks: WebhooksModule = new WebhooksModule({});
  
  /**
   * @param options - Parasut API credentials and options
   * @param options.xid - Unique ID for the client instance, useful for logging etc.
   * @param options.callbackUrl - OAuth callback URL (default: 'urn:ietf:wg:oauth:2.0:oob')
   * @param options.companyId - The company ID to use for API requests (required)
   *                           If not provided, will use clientId as companyId.
   * @param options.clientId - OAuth client ID
   * @param options.clientSecret - OAuth client secret
   * @param options.username - Parasut username (email)
   * @param options.password - Parasut password
   * @param options.baseUrl - API base URL (default: 'https://api.parasut.com/v4')
   */
  constructor(options: {
    xid?: string|number,
    callbackUrl?: string,
    companyId?: string;
    baseUrl?: string;
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
    onTokenReceived: (token: string, expiresAt: number, xid:string|number) => void;
  }) {
    this.options = {
      callbackUrl: options.callbackUrl || "urn:ietf:wg:oauth:2.0:oob",
      baseUrl: options.baseUrl || "https://api.parasut.com",
      xid: options.xid || `parasut-client-${Math.floor(Math.random() * 100)}`,
      ...options,
    };
  }

  public updateToken(token: string, expiresAt: number, xid:string|number): void {
    BaseModule.updateToken(token, expiresAt, xid);
  }

  async initialize(){
    const options = this.options || {};

    this.apiHome = new ApiHomeModule(options);
    this.companies = new CompaniesModule(options);

    this.userInfo = {...((await this.apiHome.get()).data || {})};
    this.companyList = [...((await this.companies.list()).data || [])];

    if (!this.options.companyId) {
      this.options.companyId = this.companyList[0]?.id;
    }

    this.salesOffer = new SalesOfferModule(options);
    this.salesInvoice = new SalesInvoiceModule(options);
    this.contacts = new ContactsModule(options);
    this.purchaseBills = new PurchaseBillsModule(options);
    this.bankFees = new BankFeesModule(options);
    this.salaries = new SalariesModule(options);
    this.taxes = new TaxesModule(options);
    this.employees = new EmployeesModule(options);
    this.eInvoiceInboxes = new EInvoiceInboxesModule(options);
    this.eArchive = new EArchiveModule(options);
    this.eInvoice = new EInvoiceModule(options);
    this.eSmm = new ESmmModule(options);
    this.accounts = new AccountsModule(options);
    this.products = new ProductsModule(options);
    this.itemCategories = new ItemCategoriesModule(options);
    this.tags = new TagsModule(options);
    this.warehouses = new WarehousesModule(options);
    this.transactions = new TransactionsModule(options);
    this.shipmentDocuments = new ShipmentDocumentsModule(options);
    this.stockMovements = new StockMovementsModule(options);
    this.stockUpdates = new StockUpdatesModule(options);
    this.inventoryLevels = new InventoryLevelsModule(options);
    this.trackableJobs = new TrackableJobsModule(options);
    this.webhooks = new WebhooksModule(options);
  }
}
