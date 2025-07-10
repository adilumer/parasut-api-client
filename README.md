# Parasut API Client

[![npm version](https://badge.fury.io/js/parasut-api-client.svg)](https://badge.fury.io/js/parasut-api-client)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive **Node.js/TypeScript** client for **Paraşüt** (API v4) - A cloud-based accounting and invoicing platform for small & medium sized businesses.

## 🚀 Features

- ✅ **Full API Coverage** - All endpoints from [Parasut API v4](https://apidocs.parasut.com/#)
- ✅ **TypeScript Support** - Complete type definitions and IntelliSense
- ✅ **Modular Design** - Organized by business domains (invoices, contacts, products, etc.)
- ✅ **OAuth2 Authentication** - Automatic token management and refresh
- ✅ **Error Handling** - Comprehensive error types and messages
- ✅ **Modern HTTP Client** - Built with Axios for reliability
- ✅ **Zero Config** - Works out of the box with sensible defaults

## 📦 Installation

```bash
npm install parasut-api-client
```

## 🔧 Quick Start

### Basic Setup

```typescript
import { ParasutClient } from 'parasut-api-client';

const client = new ParasutClient({
  xid: 'DUMMY_LOCAL_ID',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  username: 'YOUR_EMAIL',
  password: 'YOUR_PASSWORD',
  companyId: 'YOUR_COMPANY_ID', // If not provided, the first company in the companies list will be used.
  onTokenReceived: function(token, expiresAt, xid){}, // optional
  baseUrl: 'https://api.parasut.com' // Optional
});

await client.initialize();
```

### Working with multiple clients

The `xid` parameter is used to identify a client. If you have multiple clusters running and you don't want to send multiple auth requests for each of them; or you want to may be cache the token in REDIS for later use/preserve across restarts etc, you can define an `xid` for your ease. When the authorization request is made, the `onTokenReceived` function will be triggered and you'd be able to use the token as you need.

```typescript

const clientOne =  new ParasutClient({
  ...
  onTokenReceived: function(token, expiresAt, xid){
    // Cache with REDIS, for example.
    someRedisConnector.HSET(`parasut-cache-${xid}`, {token, expiresAt});
  }
});

const clientTwo =  new ParasutClient({
  ...,
  onTokenReceived: function(token, expiresAt, xid){
    // Trigger an event emitter perhaps?
    // Or update the cache for clientOne...
    clientOne.updateToken(token, expiresAt, xid);
  }
});

```

### Working with Contacts

```typescript
// List all contacts
const contacts = await client.contacts.list();

// Create a new contact
const newContact = await client.contacts.create({
  data: {
    type: 'contacts',
    attributes: {
      name: 'Acme Corp',
      email: 'info@acme.com',
      contact_type: 'company',
      supplier: true,
      customer: false
    }
  }
});

// Get a specific contact
const contact = await client.contacts.show('123');

// Update contact
const updatedContact = await client.contacts.update('123', {
  data: {
    type: 'contacts',
    attributes: {
      name: 'Updated Name'
    }
  }
});
```

### Working with Sales Invoices

```typescript
// List sales invoices
const invoices = await client.salesInvoice.list();

// Create a sales invoice
const invoice = await client.salesInvoice.create({
  data: {
    type: 'sales_invoices',
    attributes: {
      item_type: 'invoice',
      issue_date: '2025-01-15',
      currency: 'TRL',
      is_abroad: false,
      cash_sale: false,
      shipment_included: false
    },
    relationships: {
      contact: {
        data: { id: '123', type: 'contacts' }
      },
      details: {
        data: [{
          type: 'sales_invoice_details',
          attributes: {
            quantity: 1,
            unit_price: 100.00,
            vat_rate: 18,
            description: 'Service Fee'
          }
        }]
      }
    }
  }
});

// Get invoice PDF
const pdfUrl = await client.salesInvoice.getPdf('456');
```

### Working with Products

```typescript
// List products
const products = await client.products.list();

// Create a product
const product = await client.products.create({
  data: {
    type: 'products',
    attributes: {
      name: 'Premium Service',
      code: 'PREM001',
      vat_rate: 18,
      list_price: 150.00,
      currency: 'TRL',
      inventory_tracking: false
    }
  }
});
```

## 🏗️ API Modules

The client is organized into logical modules matching the Parasut API structure:

| Module                     | Description            | Key Operations                      |
| -------------------------- | ---------------------- | ----------------------------------- |
| `client.companies`         | Company management     | list, show, update settings         |
| `client.contacts`          | Customers & vendors    | CRUD operations, contact people     |
| `client.products`          | Product catalog        | CRUD operations, inventory tracking |
| `client.salesInvoice`      | Sales invoices         | CRUD, PDF generation, payments      |
| `client.salesOffer`        | Sales offers           | CRUD, convert to invoice            |
| `client.purchaseBills`     | Purchase bills         | CRUD, payment management            |
| `client.accounts`          | Chart of accounts      | CRUD, transactions                  |
| `client.transactions`      | Financial transactions | Debit/credit operations             |
| `client.stockMovements`    | Inventory movements    | Track stock changes                 |
| `client.warehouses`        | Warehouse management   | CRUD operations                     |
| `client.shipmentDocuments` | Shipment documents     | İrsaliye management                 |
| `client.eInvoice`          | E-Invoice operations   | Turkish e-invoice system            |
| `client.eArchive`          | E-Archive operations   | Turkish e-archive system            |
| `client.bankFees`          | Bank fees              | Fee management                      |
| `client.salaries`          | Salary management      | Employee salary tracking            |
| `client.employees`         | Employee management    | CRUD operations                     |
| `client.taxes`             | Tax management         | Tax calculations                    |
| `client.tags`              | Tagging system         | Organize resources                  |
| `client.webhooks`          | Webhook management     | Event notifications                 |

## 🔐 Authentication

The client uses **OAuth2 Password Grant** flow as specified in the [Parasut API documentation](https://apidocs.parasut.com/#/authentication):

- **Automatic token management** - Tokens are fetched and cached automatically
- **Token refresh** - Expired tokens are refreshed transparently
- **Secure requests** - All requests include proper `Authorization: Bearer <token>` headers

## 📋 TypeScript Support

All API resources are fully typed with TypeScript interfaces:

```typescript
import { SalesInvoice, Contact, Product } from 'parasut-api-client';

// Full type safety and IntelliSense
const invoice: SalesInvoice = await client.salesInvoice.show('123');
const contact: Contact = await client.contacts.show(invoice.relationships?.contact?.data.id);
```

## 🚀 Advanced Usage

### Pagination

```typescript
// Get paginated results
const result = await client.contacts.list({
  page: 1,
  per_page: 50
});

console.log('Total pages:', result.meta?.total_pages);
console.log('Current page:', result.meta?.current_page);
```

### Filtering and Sorting

```typescript
// Filter and sort results
const invoices = await client.salesInvoice.list({
  filter: {
    issue_date: '2025-01-01..2025-01-31',
    contact_id: '123'
  },
  sort: '-issue_date',
  include: 'contact,details'
});
```

### Including Related Resources

```typescript
// Include related resources in response
const invoice = await client.salesInvoice.show('123', {
  include: 'contact,details,payments'
});
```

## 🛠️ Development

### Building the Project

```bash
npm run build
```

### Running Tests

```bash
npm test
npm run test:watch
npm run test:coverage
```

## 📚 Resources

- [Parasut API Documentation](https://apidocs.parasut.com/#)
- [OAuth2 Password Grant](https://apidocs.parasut.com/#/authentication)
- [JSON:API Specification](https://jsonapi.org/format/)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions:

- 📧 Create an issue on GitHub
- 📖 Check the [Parasut API documentation](https://apidocs.parasut.com/#)
- 💬 Review existing issues for solutions

---
