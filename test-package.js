#!/usr/bin/env node

// Test script to verify the built package works correctly
const { ParasutClient } = require('./dist');

console.log('✅ Testing Parasut API Client package...\n');

try {
  // Test basic import
  console.log('1. ✅ Import successful');
  
  // Test client creation
  const client = new ParasutClient({
    clientId: 'test-client-id',
    clientSecret: 'test-client-secret',
    username: 'test@example.com',
    password: 'test-password',
    companyId: 'test-company-id'
  });
  console.log('2. ✅ Client creation successful');
  
  // Test module availability
  const modules = [
    'companies', 'contacts', 'salesInvoice', 'salesOffer', 'products',
    'accounts', 'transactions', 'warehouses', 'stockMovements', 
    'shipmentDocuments', 'inventoryLevels', 'trackableJobs', 'webhooks'
  ];
  
  modules.forEach(module => {
    if (!client[module]) {
      throw new Error(`Module ${module} not found`);
    }
  });
  console.log('3. ✅ All modules available');
  
  console.log('\n🎉 Package test completed successfully!');
  console.log('📦 The package is ready for publication.');
  
} catch (error) {
  console.error('❌ Package test failed:', error.message);
  process.exit(1);
}
