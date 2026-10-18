import express from 'express';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Secure all endpoints below: requires active token validation and DONOR privilege tier
router.use(protect, restrictTo('DONOR'));

// Form endpoint to post a food donation item
router.post('/donations', (req, res) => {
  res.status(201).json({ status: 'success', message: 'Food item donation logged successfully.' });
});

// History endpoint to fetch past items posted by this logged-in donor
router.get('/my-donations', (req, res) => {
  res.status(200).json({ status: 'success', data: [], message: 'Donor active history logs loaded.' });
});
// UNPROTECTED DEMO FOR SUSTAINABILITY METRICS ENGINE
router.get('/demo-sustainability-score', (req, res) => {
  const totalKgsRescued = 120; // Simulating database sum for a specific restaurant donor

  // Environmental impact conversion constants
  const CO2_SAVED_PER_KG = 2.5; // kg of CO2 equivalent
  const WATER_SAVED_PER_KG = 50;  // Liters of water preserved

  const environmentalImpact = {
    donorName: "Grand Palace Catering",
    totalFoodRescued: `${totalKgsRescued} kg`,
    carbonOffset: `${totalKgsRescued * CO2_SAVED_PER_KG} kg of CO2 prevented`,
    waterConservation: `${totalKgsRescued * WATER_SAVED_PER_KG} Liters preserved`,
    corporateImpactTier: totalKgsRescued > 100 ? "PLATINUM_GREEN_PARTNER" : "GOLD_PARTNER"
  };

  res.status(200).json({
    status: 'success',
    engine: 'EcoMetrics Analytics Processor',
    message: 'Successfully generated automated CSR (Corporate Social Responsibility) impact log.',
    data: environmentalImpact
  });
});


export default router;
