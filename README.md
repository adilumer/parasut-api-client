# Parasut API Client

This is a Node.js client for Paraşüt, a cloud-based accounting and invoicing platform designed for small businesses in Turkey. Paraşüt provides tools for managing invoices, expenses, stock, and financial reporting.

This Node.js/TypeScript library offers a simple interface to interact with the Paraşüt API v4, enabling seamless integration for automating financial operations.

The project was originally intended to be completely dependency-free. However, I later added Axios to simplify HTTP request handling, as most projects integrating with external APIs already include an HTTP client—and Axios is one of the most widely adopted and reliable options available.

The API client is modular by design. Functionality is organized into domain-specific modules (e.g., SalesOffers, Taxes, Contacts), just as they have been named in the API reference; allowing intuitive access to endpoints. For example, you can fetch an invoice with apiClient.sales.getInvoice(...).

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

## Authentication (OAuth2 Password Grant)

The client authenticates using the OAuth2 password grant flow, as described in the [Parasut API docs](https://apidocs.parasut.com/#/authentication).

- The access token is automatically fetched and cached.
- The token is refreshed before expiration.
- All requests are made with the correct `Authorization: Bearer <token>` header.

---

## Type Definitions

All major Parasut API objects are defined as TypeScript interfaces for type safety and IDE autocompletion. Type definitions are included in the published package and available for import.

---

## References

- [Parasut API Documentation](https://apidocs.parasut.com/#)
- [OAuth2 Password Grant](https://apidocs.parasut.com/#/authentication)
- [JSON:API Spec](https://jsonapi.org/format/)
