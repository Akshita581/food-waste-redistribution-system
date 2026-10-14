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

export default router;
