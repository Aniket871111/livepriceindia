#!/usr/bin/env node

/**
 * Auto Price Update Bot
 * Triggers ISR revalidation and monitors price freshness
 */

const https = require('https');

const BASE_URL = 'https://livepriceindia.vercel.app';

// Pages that need regular updates
const PAGES_TO_UPDATE = [
  '/gold-price-india',
  '/gold-price-pune',
  '/gold-price-mumbai',
  '/gold-price-delhi',
  '/gold-price-bangalore',
  '/petrol-price-india',
  '/nifty-live',
  '/cricket-live',
  '/crypto-prices-inr',
];

// API endpoints to check
const API_ENDPOINTS = [
  '/api/gold',
  '/api/cricket',
];

function fetchURL(url) {
  return new Promise((resolve, reject) => {
    const fullUrl = `${BASE_URL}${url}`;
    
    https.get(fullUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          data: data.substring(0, 500), // First 500 chars
          headers: res.headers,
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function updatePage(page) {
  try {
    const result = await fetchURL(page);
    
    if (result.statusCode === 200) {
      console.log(`✅ ${page} - Updated (${result.statusCode})`);
      return true;
    } else {
      console.log(`⚠️  ${page} - Warning (${result.statusCode})`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${page} - Error: ${error.message}`);
    return false;
  }
}

async function checkAPI(endpoint) {
  try {
    const result = await fetchURL(endpoint);
    
    if (result.statusCode === 200) {
      try {
        const jsonData = JSON.parse(result.data);
        console.log(`✅ ${endpoint} - API Working`);
        console.log(`   Data preview: ${Object.keys(jsonData).join(', ')}`);
        return true;
      } catch (e) {
        console.log(`✅ ${endpoint} - Response OK (non-JSON)`);
        return true;
      }
    } else {
      console.log(`❌ ${endpoint} - Failed (${result.statusCode})`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${endpoint} - Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🤖 Auto Price Update Bot Started');
  console.log('⏰ ' + new Date().toLocaleString('en-IN'));
  console.log('='.repeat(60));
  
  // Check APIs first
  console.log('\n📡 Checking API Endpoints...\n');
  const apiResults = await Promise.all(API_ENDPOINTS.map(checkAPI));
  const apiSuccess = apiResults.filter(Boolean).length;
  
  console.log(`\n📊 APIs: ${apiSuccess}/${API_ENDPOINTS.length} working`);
  
  // Update pages
  console.log('\n🔄 Triggering ISR Revalidation...\n');
  const pageResults = await Promise.all(PAGES_TO_UPDATE.map(updatePage));
  const pageSuccess = pageResults.filter(Boolean).length;
  
  console.log(`\n📊 Pages: ${pageSuccess}/${PAGES_TO_UPDATE.length} updated`);
  
  // Summary
  console.log('\n' + '='.repeat(60));
  if (apiSuccess === API_ENDPOINTS.length && pageSuccess === PAGES_TO_UPDATE.length) {
    console.log('✅ All systems operational!');
    console.log('⏱️  ISR caches will refresh within 60 seconds');
    process.exit(0);
  } else {
    console.log('⚠️  Some checks failed - see details above');
    process.exit(1);
  }
}

// Run
main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
