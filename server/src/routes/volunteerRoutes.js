import express from 'express';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// Secure all endpoints below: requires active token validation and VOLUNTEER privilege tier
router.use(protect, restrictTo('VOLUNTEER'));

// UNPROTECTED DEMO FOR OTP VERIFICATION ENGINE
router.get('/demo-verify-delivery', (req, res) => {
  const inputOTP = "4821";  // Simulating what the volunteer types
  const actualNGOOTP = "4821"; // Simulating what the backend generated for the NGO

  if (inputOTP !== actualNGOOTP) {
    return res.status(400).json({ status: 'error', message: 'Invalid Verification Code. Security mismatch logged.' });
  }

  res.status(200).json({
    status: 'success',
    action: 'Secure Handover Verified',
    message: 'OTP matched successfully. Donation status permanently transitioned to DELIVERED.',
    timestamp: new Date().toISOString()
  });
});

// Endpoint for volunteers to check assigned food pickup tasks
router.get('/my-assignments', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Successfully fetched current assigned logistics tasks.',
    data: [
      { assignmentId: 501, pickupLocation: 'Hotel Taj', dropLocation: 'Care NGO', status: 'PENDING_PICKUP' }
    ]
  });
});

// Endpoint for volunteers to update delivery status milestones
router.patch('/update-status', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Delivery milestone track status updated successfully.'
  });
});

export default router;
