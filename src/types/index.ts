
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
    created_at: string;
    updated_at: string;
    // ...other fields
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
    name: string;
    email?: string;
    tax_number?: string;
    tax_office?: string;
    // ...other fields
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
    name: string;
    code?: string;
    vat_rate?: number;
    // ...other fields
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
    description?: string;
    issue_date: string;
    due_date?: string;
    currency: string;
    // ...other fields
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
    description?: string;
    issue_date: string;
    currency: string;
    // ...other fields
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
    amount: number;
    paid_at: string;
    // ...other fields
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
    amount: number;
    collected_at: string;
    // ...other fields
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
    iban?: string;
    // ...other fields
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
    // ...other fields
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
    // ...other fields
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

// --- End Parasut API Type Definitions --- 