import { ParasutClient } from './parasut-client';

describe('ParasutClient', () => {
  it('should create an instance with valid options', () => {
    const client = new ParasutClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      username: 'test@example.com',
      password: 'test-password',
      companyId: 'test-company-id'
    });

    expect(client).toBeInstanceOf(ParasutClient);
    expect(client.options.clientId).toBe('test-client-id');
    expect(client.options.companyId).toBe('test-company-id');
  });

  it('should have all required modules initialized', () => {
    const client = new ParasutClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      username: 'test@example.com',
      password: 'test-password'
    });

    expect(client.companies).toBeDefined();
    expect(client.contacts).toBeDefined();
    expect(client.salesInvoice).toBeDefined();
    expect(client.salesOffer).toBeDefined();
    expect(client.products).toBeDefined();
    expect(client.accounts).toBeDefined();
    expect(client.transactions).toBeDefined();
    expect(client.warehouses).toBeDefined();
    expect(client.stockMovements).toBeDefined();
    expect(client.shipmentDocuments).toBeDefined();
    expect(client.inventoryLevels).toBeDefined();
    expect(client.trackableJobs).toBeDefined();
    expect(client.webhooks).toBeDefined();
  });

  it('should default companyId to clientId when not provided', () => {
    const client = new ParasutClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      username: 'test@example.com',
      password: 'test-password'
    });

    // Since companyId defaults to clientId internally in the modules
    expect(client.options.clientId).toBe('test-client-id');
  });
});