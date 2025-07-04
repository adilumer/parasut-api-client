# Parasut API Client

This is a Node.js client for Paraşüt, a cloud-based accounting and invoicing platform designed for small businesses in Turkey. Paraşüt provides tools for managing invoices, expenses, stock, and financial reporting.

This Node.js/TypeScript library offers a simple interface to interact with the Paraşüt API v4, enabling seamless integration for automating financial operations.

The project was originally intended to be completely dependency-free. However, I later added Axios to simplify HTTP request handling, as most projects integrating with external APIs already include an HTTP client—and Axios is one of the most widely adopted and reliable options available.

The API client is modular by design. Functionality is organized into domain-specific modules (e.g., SalesOffers, Taxes, Contacts), allowing intuitive access to endpoints. For example, you can fetch an invoice with apiClient.sales.getInvoice(...). This structure keeps the client organized, scalable, and easy to use.

Reference: [Parasut API](https://apidocs.parasut.com/#)

---

## Installation

Install from npm: ```bash npm install parasut-api-client```

---

## Usage

### Importing the Client

```typescript
// ESM
import { ParasutClient } from 'parasut-api-client';

// CommonJS
const { ParasutClient } = require('parasut-api-client');
```

### Creating a Client Instance

```typescript
const client = new ParasutClient({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  username: 'YOUR_EMAIL',
  password: 'YOUR_PASSWORD',
  // baseUrl: 'https://api.parasut.com/v4' // optional, defaults to v4
});
```

## Modulation

The API client is modular by design. Functionality is organized into domain-specific modules, allowing intuitive access to endpoints:

- `client.companies` - Company management
- `client.contacts` - Contact (customer/vendor) management
- `client.salesOffer` - Sales offers
- `client.salesInvoice` - Sales invoices
- `client.apiHome` - API home and general endpoints

Example usage:
```typescript
// Get all contacts
const contacts = await client.contacts.getContacts();

// Create a new contact
const newContact = await client.contacts.createContact({
  name: 'John Doe',
  email: 'john@example.com'
});

// Get a specific contact
const contact = await client.contacts.getContact('123');
```

## Authentication

### OAuth2 Password Grant

The client authenticates using the OAuth2 password grant flow, as described in the [Parasut API docs](https://apidocs.parasut.com/#/authentication).

- The access token is automatically fetched and cached.
- The token is refreshed before expiration.
- All requests are made with the correct `Authorization: Bearer <token>` header.

#### Error Handling

- Throws an error if credentials are missing or invalid.
- Throws an error if the authentication response is malformed.

---

## TypeScript Type Definitions

All major Parasut API objects are defined as TypeScript interfaces for type safety and IDE autocompletion. Type definitions are included in the published package and available via `import type`.

### Company

Represents a Parasut company (organization).  
[API Reference: Companies](https://apidocs.parasut.com/#/companies)

```typescript
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
```

---

### Contact

Represents a contact (customer or vendor).  
[API Reference: Contacts](https://apidocs.parasut.com/#/contacts)

```typescript
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
```

---

### Product

Represents a product or service.  
[API Reference: Products](https://apidocs.parasut.com/#/products)

```typescript
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
```

---

### SalesInvoice

Represents a sales invoice.  
[API Reference: Sales Invoices](https://apidocs.parasut.com/#/sales_invoices)

```typescript
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
```

---

### PurchaseBill

Represents a purchase bill.  
[API Reference: Purchase Bills](https://apidocs.parasut.com/#/purchase_bills)

```typescript
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
```

---

### Payment

Represents a payment (outflow).  
[API Reference: Payments](https://apidocs.parasut.com/#/payments)

```typescript
export interface Payment {
  id: string;
  type: 'payments';
  attributes: {
    amount: number;
    paid_at: string;
    // ...other fields
  };
}
```

---

### Collection

Represents a collection (inflow).  
[API Reference: Collections](https://apidocs.parasut.com/#/collections)

```typescript
export interface Collection {
  id: string;
  type: 'collections';
  attributes: {
    amount: number;
    collected_at: string;
    // ...other fields
  };
}
```

---

### BankAccount

Represents a bank account.  
[API Reference: Bank Accounts](https://apidocs.parasut.com/#/bank_accounts)

```typescript
export interface BankAccount {
  id: string;
  type: 'bank_accounts';
  attributes: {
    name: string;
    iban?: string;
    // ...other fields
  };
}
```

---

### CashAccount

Represents a cash account.  
[API Reference: Cash Accounts](https://apidocs.parasut.com/#/cash_accounts)

```typescript
export interface CashAccount {
  id: string;
  type: 'cash_accounts';
  attributes: {
    name: string;
    // ...other fields
  };
}
```

---

### Tag

Represents a tag.  
[API Reference: Tags](https://apidocs.parasut.com/#/tags)

```typescript
export interface Tag {
  id: string;
  type: 'tags';
  attributes: {
    name: string;
    // ...other fields
  };
}
```

---

### ErrorResponse

Represents a standard error response from the Parasut API.  
[API Reference: Errors](https://apidocs.parasut.com/#/errors)

```typescript
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
```

---

## References

- [Parasut API Documentation](https://apidocs.parasut.com/#)
- [OAuth2 Password Grant](https://apidocs.parasut.com/#/authentication)
- [JSON:API Spec](https://jsonapi.org/format/)
