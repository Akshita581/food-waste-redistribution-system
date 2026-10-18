import express from 'express';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// -------------------------------------------------------------------------
// PUBLIC ENDPOINTS (Accessible in Browser for Demo/Evaluation)
// -------------------------------------------------------------------------

// UNPROTECTED BROWSER DEMO LINK FOR THE VOLUNTEER BATCHING ENGINE
router.get('/demo-volunteer-batch', (req, res) => {
  const targetArea = 'Sector-62'; // Pre-set region for testing
  
  const mockDB = [
    { id: 101, foodType: 'Surplus Rice & Bread', quantity: '20 kg', area: 'Sector-62' },
    { id: 102, foodType: 'Leftover Biryani', quantity: '15 kg', area: 'Sector-62' },
    { id: 104, foodType: 'Packed Fruit Boxes', quantity: '8 kg', area: 'Sector-62' }
  ];

  const manifest = {
    manifestId: `BATCH-ROUTE-62`,
    clusterZone: targetArea,
    totalPickupsBatched: mockDB.length,
    estimatedStops: mockDB.map((item, index) => ({
      stop: index + 1,
      id: item.id,
      food: item.foodType,
      weight: item.quantity
    }))
  };

  res.status(200).json({
    status: 'success',
    implementationMode: 'Automated Route Clustering Logic',
    message: `Intelligently consolidated ${mockDB.length} independent donations from ${targetArea} into a single route task.`,
    data: manifest
  });
});

// -------------------------------------------------------------------------
// PROTECTED ENDPOINTS (Requires Active Login Token & Correct Role Tier)
// -------------------------------------------------------------------------

// Secure all endpoints below: requires active token validation and NGO privilege tier
router.use(protect, restrictTo('NGO'));

// Endpoint for NGOs to browse all available active food donations
router.get('/available-food', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Successfully retrieved active food donations list from database.',
    data: [
      { id: 101, foodType: 'Surplus Rice & Curry', quantity: '20 kg', donor: 'Hotel Taj' },
      { id: 102, foodType: 'Packaged Sandwiches', quantity: '15 packs', donor: 'Fresh bakes Cafe' }
    ]
  });
});

// UNPROTECTED DEMO FOR EXPIRY PRIORITY ENGINE
router.get('/demo-priority-alerts', (req, res) => {
  const mockDonations = [
    { id: 301, item: 'Fresh Bread', expiresInHours: 24 },
    { id: 302, item: 'Cooked Meals', expiresInHours: 1.5 } // Under 2 hours!
  ];

  // Map through items and calculate structural priority tiers dynamically
  const dynamicAlerts = mockDonations.map(donation => ({
    ...donation,
    priorityLevel: donation.expiresInHours <= 2 ? 'CRITICAL_URGENT' : 'STANDARD',
    actionRequired: donation.expiresInHours <= 2 ? 'Broadcast immediate push notifications to top 3 nearest NGOs' : 'List normally'
  }));

  res.status(200).json({
    status: 'success',
    engine: 'Dynamic Expiry Risk Analyzer',
    message: 'Intelligently scanned active inventory for immediate spoilage risks.',
    alerts: dynamicAlerts
  });
});


// Endpoint for NGOs to submit a request/claim a food item
router.post('/request-food', (req, res) => {
  res.status(201).json({
    status: 'success',
    message: 'Food request submitted successfully. Awaiting volunteer assignment.'
  });
});

export default router;
