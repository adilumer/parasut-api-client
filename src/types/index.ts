// --- Parasut API Type Definitions ---

/**
 * Represents a Parasut company (organization).
 * https://apidocs.parasut.com/#/companies
 */
export interface Company {
  id: string;
  type: 'companies';
  attributes: {
    name: string;
    tradename?: string;
    shortname?: string;
    tax_office?: string;
    tax_number?: string;
    district?: string;
    city?: string;
    address?: string;
    phone?: string;
    fax?: string;
    email?: string;
    web?: string;
    mersis_number?: string;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents a contact (customer or vendor).
 * https://apidocs.parasut.com/#/contacts
 */
export interface Contact {
  id: string;
  type: 'contacts';
  attributes: {
    email?: string;
    name: string;
    short_name?: string;
    contact_type: 'person' | 'company';
    supplier: boolean;
    customer: boolean;
    tax_number?: string;
    tax_office?: string;
    district?: string;
    city?: string;
    address?: string;
    phone?: string;
    fax?: string;
    is_abroad: boolean;
    archived: boolean;
    untrackable: boolean;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    contact_people?: {
      data: Array<{ id: string; type: 'contact_people' }>;
    };
    contact_portal?: {
      data: { id: string; type: 'contact_portals' } | null;
    };
  };
}

/**
 * Represents a contact person.
 * https://apidocs.parasut.com/#/contact_people
 */
export interface ContactPerson {
  id: string;
  type: 'contact_people';
  attributes: {
    name: string;
    email?: string;
    phone?: string;
    notes?: string;
    created_at: string;
    updated_at: string;
  };
  relationships: {
    contact: {
      data: { id: string; type: 'contacts' };
    };
  };
}

/**
 * Represents a contact portal.
 * https://apidocs.parasut.com/#/contact_portals
 */
export interface ContactPortal {
  id: string;
  type: 'contact_portals';
  attributes: {
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
  };
  relationships: {
    contact: {
      data: { id: string; type: 'contacts' };
    };
  };
}

/**
 * Represents a product or service.
 * https://apidocs.parasut.com/#/products
 */
export interface Product {
  id: string;
  type: 'products';
  attributes: {
    code?: string;
    name: string;
    vat_rate?: number;
    sales_excise_duty?: number;
    sales_excise_duty_type?: 'percentage' | 'amount';
    purchase_excise_duty?: number;
    purchase_excise_duty_type?: 'percentage' | 'amount';
    unit?: string;
    communications_tax_rate?: number;
    archived: boolean;
    list_price?: number;
    currency: string;
    buying_price?: number;
    buying_currency?: string;
    inventory_tracking: boolean;
    initial_stock_count?: number;
    gtip?: string;
    barcode?: string;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
  };
}

/**
 * Represents a product category.
 * https://apidocs.parasut.com/#/categories
 */
export interface Category {
  id: string;
  type: 'categories';
  attributes: {
    name: string;
    bg_color?: string;
    text_color?: string;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    parent?: {
      data: { id: string; type: 'categories' } | null;
    };
    subcategories?: {
      data: Array<{ id: string; type: 'categories' }>;
    };
  };
}

/**
 * Represents a sales invoice.
 * https://apidocs.parasut.com/#/sales_invoices
 */
export interface SalesInvoice {
  id: string;
  type: 'sales_invoices';
  attributes: {
    archived: boolean;
    before_taxes_total?: number;
    billing_address?: string;
    billing_fax?: string;
    billing_phone?: string;
    cash_sale: boolean;
    city?: string;
    country?: string;
    created_at: string;
    currency: string;
    description?: string;
    district?: string;
    due_date?: string;
    exchange_rate?: number;
    gross_total?: number;
    invoice_discount_type?: 'percentage' | 'amount';
    invoice_discount?: number;
    invoice_id?: number;
    invoice_no?: string;
    invoice_series?: string;
    is_abroad: boolean;
    issue_date: string;
    item_type: 'invoice' | 'estimate' | 'cancelled';
    net_total?: number;
    order_date?: string;
    order_no?: string;
    payment_status: 'paid' | 'overdue' | 'unpaid' | 'partially_paid';
    payment_total?: number;
    printout_count: number;
    remaining_amount?: number;
    remaining_in_trl?: number;
    shipment_addres?: string;
    shipment_included: boolean;
    tax_number?: string;
    tax_office?: string;
    total_communications_tax?: number;
    total_discount?: number;
    total_excise_duty?: number;
    total_in_trl?: number;
    total_invoice_discount?: number;
    total_vat?: number;
    total?: number;
    updated_at: string;
    vat_withholding?: number;
    vat_witholding_rate?: number;
    withholding?: number;
    witholding_rate?: number;
  };
  relationships?: {
    details?: {
      data: Array<{ id: string; type: 'sales_invoice_details' }>;
    };
    contact?: {
      data: { id: string; type: 'contacts' };
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
    sales_offer?: {
      data: { id: string; type: 'sales_offers' } | null;
    };
    sharings?: {
      data: Array<{ id: string; type: 'sharings' }>;
    };
    recurrence_plan?: {
      data: { id: string; type: 'recurrence_plans' } | null;
    };
    active_e_document?: {
      data: { id: string; type: 'e_invoices' | 'e_archives' | 'e_smm' } | null;
    };
  };
}

/**
 * Represents a sales invoice detail line item.
 * https://apidocs.parasut.com/#/sales_invoice_details
 */
export interface SalesInvoiceDetail {
  id: string;
  type: 'sales_invoice_details';
  attributes: {
    quantity: number;
    unit_price: number;
    vat_rate: number;
    discount_type?: 'percentage' | 'amount';
    discount?: number;
    excise_duty_type?: 'percentage' | 'amount';
    excise_duty?: number;
    communications_tax_rate?: number;
    description?: string;
    created_at: string;
    updated_at: string;
    discount_value?: number;
    excise_duty_value?: number;
    communications_tax_value?: number;
    gross_total?: number;
    net_total?: number;
    total?: number;
    vat_total?: number;
  };
  relationships?: {
    product?: {
      data: { id: string; type: 'products' } | null;
    };
    sales_invoice?: {
      data: { id: string; type: 'sales_invoices' };
    };
  };
}

/**
 * Represents a purchase bill.
 * https://apidocs.parasut.com/#/purchase_bills
 */
export interface PurchaseBill {
  id: string;
  type: 'purchase_bills';
  attributes: {
    item_type: 'bill' | 'refund';
    description?: string;
    issue_date: string;
    due_date?: string;
    invoice_no?: string;
    currency: string;
    exchange_rate?: number;
    witholding_rate?: number;
    vat_witholding_rate?: number;
    invoice_discount_type?: 'percentage' | 'amount';
    invoice_discount?: number;
    billing_address?: string;
    billing_phone?: string;
    billing_fax?: string;
    tax_office?: string;
    tax_number?: string;
    city?: string;
    district?: string;
    is_abroad: boolean;
    archived: boolean;
    order_no?: string;
    order_date?: string;
    payment_status: 'paid' | 'overdue' | 'unpaid' | 'partially_paid';
    payment_total?: number;
    remaining_amount?: number;
    remaining_in_trl?: number;
    net_total?: number;
    gross_total?: number;
    withholding?: number;
    total_excise_duty?: number;
    total_communications_tax?: number;
    total_vat?: number;
    vat_withholding?: number;
    total_discount?: number;
    total_invoice_discount?: number;
    before_taxes_total?: number;
    total?: number;
    total_in_trl?: number;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    details?: {
      data: Array<{ id: string; type: 'purchase_bill_details' }>;
    };
    contact?: {
      data: { id: string; type: 'contacts' };
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
    recurrence_plan?: {
      data: { id: string; type: 'recurrence_plans' } | null;
    };
  };
}

/**
 * Represents a purchase bill detail line item.
 * https://apidocs.parasut.com/#/purchase_bill_details
 */
export interface PurchaseBillDetail {
  id: string;
  type: 'purchase_bill_details';
  attributes: {
    quantity: number;
    unit_price: number;
    vat_rate: number;
    discount_type?: 'percentage' | 'amount';
    discount?: number;
    excise_duty_type?: 'percentage' | 'amount';
    excise_duty?: number;
    communications_tax_rate?: number;
    description?: string;
    created_at: string;
    updated_at: string;
    discount_value?: number;
    excise_duty_value?: number;
    communications_tax_value?: number;
    gross_total?: number;
    net_total?: number;
    total?: number;
    vat_total?: number;
  };
  relationships?: {
    product?: {
      data: { id: string; type: 'products' } | null;
    };
    purchase_bill?: {
      data: { id: string; type: 'purchase_bills' };
    };
  };
}

/**
 * Represents a payment (outflow).
 * https://apidocs.parasut.com/#/payments
 */
export interface Payment {
  id: string;
  type: 'payments';
  attributes: {
    account_type: 'BankAccount' | 'CashAccount';
    amount: number;
    date: string;
    description?: string;
    currency: string;
    exchange_rate?: number;
    amount_in_trl?: number;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    payable?: {
      data: { id: string; type: 'purchase_bills' | 'salary' | 'employee_payment' };
    };
    account?: {
      data: { id: string; type: 'bank_accounts' | 'cash_accounts' };
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
  };
}

/**
 * Represents a collection (inflow).
 * https://apidocs.parasut.com/#/collections
 */
export interface Collection {
  id: string;
  type: 'collections';
  attributes: {
    account_type: 'BankAccount' | 'CashAccount';
    amount: number;
    date: string;
    description?: string;
    currency: string;
    exchange_rate?: number;
    amount_in_trl?: number;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    collectable?: {
      data: { id: string; type: 'sales_invoices' };
    };
    account?: {
      data: { id: string; type: 'bank_accounts' | 'cash_accounts' };
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
  };
}

/**
 * Represents a bank account.
 * https://apidocs.parasut.com/#/bank_accounts
 */
export interface BankAccount {
  id: string;
  type: 'bank_accounts';
  attributes: {
    name: string;
    bank_name?: string;
    bank_branch?: string;
    account_no?: string;
    iban?: string;
    currency: string;
    archived: boolean;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents a cash account.
 * https://apidocs.parasut.com/#/cash_accounts
 */
export interface CashAccount {
  id: string;
  type: 'cash_accounts';
  attributes: {
    name: string;
    currency: string;
    archived: boolean;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents a tag.
 * https://apidocs.parasut.com/#/tags
 */
export interface Tag {
  id: string;
  type: 'tags';
  attributes: {
    name: string;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents an employee.
 * https://apidocs.parasut.com/#/employees
 */
export interface Employee {
  id: string;
  type: 'employees';
  attributes: {
    name: string;
    email?: string;
    phone?: string;
    can_see_invoice_total: boolean;
    can_see_estimate_total: boolean;
    can_see_purchase_total: boolean;
    user_role: 'admin' | 'normal' | 'limited';
    archived: boolean;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents a salary payment.
 * https://apidocs.parasut.com/#/salaries
 */
export interface Salary {
  id: string;
  type: 'salaries';
  attributes: {
    date: string;
    description?: string;
    currency: string;
    amount: number;
    exchange_rate?: number;
    amount_in_trl?: number;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    employee?: {
      data: { id: string; type: 'employees' };
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
  };
}

/**
 * Represents an employee payment.
 * https://apidocs.parasut.com/#/employee_payments
 */
export interface EmployeePayment {
  id: string;
  type: 'employee_payments';
  attributes: {
    account_type: 'BankAccount' | 'CashAccount';
    amount: number;
    date: string;
    description?: string;
    currency: string;
    exchange_rate?: number;
    amount_in_trl?: number;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    payable?: {
      data: { id: string; type: 'salaries' };
    };
    account?: {
      data: { id: string; type: 'bank_accounts' | 'cash_accounts' };
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
  };
}

/**
 * Represents a sales offer.
 * https://apidocs.parasut.com/#/sales_offers
 */
export interface SalesOffer {
  id: string;
  type: 'sales_offers';
  attributes: {
    description?: string;
    issue_date: string;
    expiry_date?: string;
    currency: string;
    exchange_rate?: number;
    invoice_discount_type?: 'percentage' | 'amount';
    invoice_discount?: number;
    billing_address?: string;
    billing_phone?: string;
    billing_fax?: string;
    tax_office?: string;
    tax_number?: string;
    city?: string;
    district?: string;
    is_abroad: boolean;
    archived: boolean;
    net_total?: number;
    gross_total?: number;
    total_excise_duty?: number;
    total_communications_tax?: number;
    total_vat?: number;
    total_discount?: number;
    total_invoice_discount?: number;
    before_taxes_total?: number;
    total?: number;
    total_in_trl?: number;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    details?: {
      data: Array<{ id: string; type: 'sales_offer_details' }>;
    };
    contact?: {
      data: { id: string; type: 'contacts' };
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
  };
}

/**
 * Represents a sales offer detail line item.
 * https://apidocs.parasut.com/#/sales_offer_details
 */
export interface SalesOfferDetail {
  id: string;
  type: 'sales_offer_details';
  attributes: {
    quantity: number;
    unit_price: number;
    vat_rate: number;
    discount_type?: 'percentage' | 'amount';
    discount?: number;
    excise_duty_type?: 'percentage' | 'amount';
    excise_duty?: number;
    communications_tax_rate?: number;
    description?: string;
    created_at: string;
    updated_at: string;
    discount_value?: number;
    excise_duty_value?: number;
    communications_tax_value?: number;
    gross_total?: number;
    net_total?: number;
    total?: number;
    vat_total?: number;
  };
  relationships?: {
    product?: {
      data: { id: string; type: 'products' } | null;
    };
    sales_offer?: {
      data: { id: string; type: 'sales_offers' };
    };
  };
}

/**
 * Represents expense transactions.
 * https://apidocs.parasut.com/#/expenses
 */
export interface Expense {
  id: string;
  type: 'expenses';
  attributes: {
    item_type: 'expense' | 'refund';
    amount: number;
    currency: string;
    exchange_rate?: number;
    amount_in_trl?: number;
    description?: string;
    date: string;
    archived: boolean;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    debit_account?: {
      data: { id: string; type: 'accounts' };
    };
    credit_account?: {
      data: { id: string; type: 'accounts' };
    };
    contact?: {
      data: { id: string; type: 'contacts' } | null;
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
  };
}

/**
 * Represents income transactions.
 * https://apidocs.parasut.com/#/incomes
 */
export interface Income {
  id: string;
  type: 'incomes';
  attributes: {
    item_type: 'income' | 'refund';
    amount: number;
    currency: string;
    exchange_rate?: number;
    amount_in_trl?: number;
    description?: string;
    date: string;
    archived: boolean;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    debit_account?: {
      data: { id: string; type: 'accounts' };
    };
    credit_account?: {
      data: { id: string; type: 'accounts' };
    };
    contact?: {
      data: { id: string; type: 'contacts' } | null;
    };
    category?: {
      data: { id: string; type: 'categories' } | null;
    };
    tags?: {
      data: Array<{ id: string; type: 'tags' }>;
    };
  };
}

/**
 * Represents chart of accounts.
 * https://apidocs.parasut.com/#/accounts
 */
export interface Account {
  id: string;
  type: 'accounts';
  attributes: {
    name: string;
    account_type: string;
    code?: string;
    archived: boolean;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    parent?: {
      data: { id: string; type: 'accounts' } | null;
    };
  };
}

/**
 * Represents e-invoice settings.
 * https://apidocs.parasut.com/#/e_invoices
 */
export interface EInvoice {
  id: string;
  type: 'e_invoices';
  attributes: {
    vkn?: string;
    invoice_uuid?: string;
    invoice_number?: string;
    status: 'draft' | 'waiting' | 'approved' | 'cancelled';
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    sales_invoice?: {
      data: { id: string; type: 'sales_invoices' };
    };
  };
}

/**
 * Represents e-archive settings.
 * https://apidocs.parasut.com/#/e_archives
 */
export interface EArchive {
  id: string;
  type: 'e_archives';
  attributes: {
    uuid?: string;
    invoice_number?: string;
    status: 'draft' | 'waiting' | 'approved' | 'cancelled';
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    sales_invoice?: {
      data: { id: string; type: 'sales_invoices' };
    };
  };
}

/**
 * Represents e-SMM (e-İrsaliye) documents.
 * https://apidocs.parasut.com/#/e_smm
 */
export interface ESMM {
  id: string;
  type: 'e_smm';
  attributes: {
    vkn?: string;
    despatch_uuid?: string;
    despatch_number?: string;
    status: 'draft' | 'waiting' | 'approved' | 'cancelled';
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    sales_invoice?: {
      data: { id: string; type: 'sales_invoices' };
    };
  };
}

/**
 * Represents inventory levels.
 * https://apidocs.parasut.com/#/stock_movements
 */
export interface StockMovement {
  id: string;
  type: 'stock_movements';
  attributes: {
    date: string;
    movement_type: 'in' | 'out' | 'transfer' | 'initial' | 'adjustment';
    quantity: number;
    unit_price?: number;
    total_cost?: number;
    description?: string;
    reference_code?: string;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    product?: {
      data: { id: string; type: 'products' };
    };
    warehouse?: {
      data: { id: string; type: 'warehouses' } | null;
    };
    source_warehouse?: {
      data: { id: string; type: 'warehouses' } | null;
    };
    destination_warehouse?: {
      data: { id: string; type: 'warehouses' } | null;
    };
  };
}

/**
 * Represents warehouses.
 * https://apidocs.parasut.com/#/warehouses
 */
export interface Warehouse {
  id: string;
  type: 'warehouses';
  attributes: {
    name: string;
    address?: string;
    city?: string;
    district?: string;
    archived: boolean;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents recurrence plans for recurring invoices.
 * https://apidocs.parasut.com/#/recurrence_plans
 */
export interface RecurrencePlan {
  id: string;
  type: 'recurrence_plans';
  attributes: {
    name: string;
    frequency: 'monthly' | 'yearly' | 'weekly' | 'daily';
    frequency_value: number;
    start_date: string;
    end_date?: string;
    active: boolean;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents trackable jobs for async operations.
 * https://apidocs.parasut.com/#/trackable_jobs
 */
export interface TrackableJob {
  id: string;
  type: 'trackable_jobs';
  attributes: {
    status: 'pending' | 'running' | 'completed' | 'failed';
    job_type: string;
    progress?: number;
    errors?: string[];
    result?: any;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents document sharings.
 * https://apidocs.parasut.com/#/sharings
 */
export interface Sharing {
  id: string;
  type: 'sharings';
  attributes: {
    token: string;
    shared_at: string;
    expires_at?: string;
    public_url: string;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    shareable?: {
      data: { id: string; type: 'sales_invoices' | 'sales_offers' | 'purchase_bills' };
    };
  };
}

/**
 * Represents item categories (different from main categories).
 * https://apidocs.parasut.com/#/item_categories
 */
export interface ItemCategory {
  id: string;
  type: 'item_categories';
  attributes: {
    name: string;
    category_type: 'income' | 'expense';
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    parent?: {
      data: { id: string; type: 'item_categories' } | null;
    };
  };
}

/**
 * Represents webhooks for API events.
 * https://apidocs.parasut.com/#/webhooks
 */
export interface Webhook {
  id: string;
  type: 'webhooks';
  attributes: {
    url: string;
    event_types: string[];
    secret?: string;
    active: boolean;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents company settings and preferences.
 * https://apidocs.parasut.com/#/company_settings
 */
export interface CompanySettings {
  id: string;
  type: 'company_settings';
  attributes: {
    sales_invoice_series_format?: string;
    purchase_bill_series_format?: string;
    default_currency?: string;
    decimal_places?: number;
    date_format?: string;
    time_zone?: string;
    fiscal_year_start?: string;
    vat_exemption_reason?: string;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents tax withholding information.
 * https://apidocs.parasut.com/#/tax_withholdings
 */
export interface TaxWithholding {
  id: string;
  type: 'tax_withholdings';
  attributes: {
    name: string;
    rate: number;
    account_code?: string;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents VAT withholding information.
 * https://apidocs.parasut.com/#/vat_withholdings
 */
export interface VATWithholding {
  id: string;
  type: 'vat_withholdings';
  attributes: {
    name: string;
    rate: number;
    account_code?: string;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents company addresses.
 * https://apidocs.parasut.com/#/addresses
 */
export interface Address {
  id: string;
  type: 'addresses';
  attributes: {
    address_type: 'billing' | 'shipping' | 'both';
    name?: string;
    address: string;
    city?: string;
    district?: string;
    postal_code?: string;
    country?: string;
    phone?: string;
    fax?: string;
    is_default: boolean;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    contact?: {
      data: { id: string; type: 'contacts' };
    };
  };
}

/**
 * Represents API tokens for authentication.
 * https://apidocs.parasut.com/#/api_tokens
 */
export interface ApiToken {
  id: string;
  type: 'api_tokens';
  attributes: {
    name: string;
    token: string;
    scopes: string[];
    last_used_at?: string;
    expires_at?: string;
    active: boolean;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents user sessions.
 * https://apidocs.parasut.com/#/sessions
 */
export interface Session {
  id: string;
  type: 'sessions';
  attributes: {
    ip_address?: string;
    user_agent?: string;
    last_activity: string;
    created_at: string;
  };
  relationships?: {
    user?: {
      data: { id: string; type: 'users' };
    };
  };
}

/**
 * Represents users in the system.
 * https://apidocs.parasut.com/#/users
 */
export interface User {
  id: string;
  type: 'users';
  attributes: {
    email: string;
    name: string;
    role: 'owner' | 'admin' | 'user';
    active: boolean;
    last_login_at?: string;
    created_at: string;
    updated_at: string;
  };
}

/**
 * Represents file attachments.
 * https://apidocs.parasut.com/#/attachments
 */
export interface Attachment {
  id: string;
  type: 'attachments';
  attributes: {
    filename: string;
    content_type: string;
    file_size: number;
    download_url: string;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    attachable?: {
      data: { 
        id: string; 
        type: 'sales_invoices' | 'purchase_bills' | 'sales_offers' | 'contacts' | 'products';
      };
    };
  };
}

/**
 * Represents purchase orders.
 * https://apidocs.parasut.com/#/purchase_orders
 */
export interface PurchaseOrder {
  id: string;
  type: 'purchase_orders';
  attributes: {
    description?: string;
    issue_date: string;
    delivery_date?: string;
    currency: string;
    exchange_rate?: number;
    order_status: 'draft' | 'sent' | 'confirmed' | 'delivered' | 'cancelled';
    net_total?: number;
    gross_total?: number;
    total_vat?: number;
    total?: number;
    total_in_trl?: number;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    details?: {
      data: Array<{ id: string; type: 'purchase_order_details' }>;
    };
    contact?: {
      data: { id: string; type: 'contacts' };
    };
  };
}

/**
 * Represents purchase order details.
 * https://apidocs.parasut.com/#/purchase_order_details
 */
export interface PurchaseOrderDetail {
  id: string;
  type: 'purchase_order_details';
  attributes: {
    quantity: number;
    unit_price: number;
    vat_rate: number;
    description?: string;
    delivery_date?: string;
    gross_total?: number;
    net_total?: number;
    total?: number;
    vat_total?: number;
    created_at: string;
    updated_at: string;
  };
  relationships?: {
    product?: {
      data: { id: string; type: 'products' } | null;
    };
    purchase_order?: {
      data: { id: string; type: 'purchase_orders' };
    };
  };
}

/**
 * Common response wrapper for API calls.
 */
export interface ApiResponse<T> {
  data: T;
  included?: Array<any>;
  meta?: {
    current_page?: number;
    next_page?: number | null;
    prev_page?: number | null;
    total_pages?: number;
    total_count?: number;
  };
}

/**
 * Response wrapper for list/collection endpoints.
 */
export interface ApiListResponse<T> {
  data: T[];
  included?: Array<any>;
  meta?: {
    current_page?: number;
    next_page?: number | null;
    prev_page?: number | null;
    total_pages?: number;
    total_count?: number;
  };
}

/**
 * Represents a standard error response from Parasut API.
 * https://apidocs.parasut.com/#/errors
 */
export interface ErrorResponse {
  errors: Array<{
    id?: string;
    status: string;
    code: string;
    title: string;
    detail?: string;
    source?: { pointer?: string; parameter?: string };
    meta?: any;
  }>;
}

/**
 * Generic filter options for list endpoints.
 */
export interface FilterOptions {
  page?: number;
  per_page?: number;
  sort?: string;
  include?: string;
  filter?: Record<string, any>;
}

// --- End Parasut API Type Definitions ---