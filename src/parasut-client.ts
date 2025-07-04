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

/**
 * Parasut API Client
 * Implements all endpoints from https://apidocs.parasut.com/#
 *
 * Usage:
 *   const client = new ParasutClient({ ... });
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
  public eArchive: EArchiveModule;
  public eInvoice: EInvoiceModule;
  public eSmm: ESmmModule;
  public accounts: AccountsModule;
  public products: ProductsModule;
  public itemCategories: ItemCategoriesModule;
  public tags: TagsModule;
  public warehouses: WarehousesModule;
  public transactions: TransactionsModule;
  public shipmentDocuments: ShipmentDocumentsModule;
  public stockMovements: StockMovementsModule;
  public stockUpdates: StockUpdatesModule;
  public inventoryLevels: InventoryLevelsModule;
  public trackableJobs: TrackableJobsModule;
  public webhooks: WebhooksModule;
  
  /**
   * @param options - Parasut API credentials and options
   * @param options.companyId - The company ID to use for API requests (required)
   *                           If not provided, will use clientId as companyId.
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
