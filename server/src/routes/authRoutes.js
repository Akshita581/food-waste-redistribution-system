import express from 'express';
const router = express.Router();

// 1. Existing POST routes
router.post('/register', (req, res) => {
  res.status(201).json({ status: 'success', message: 'User profile initialized.' });
});

router.post('/login', (req, res) => {
  res.status(200).json({ status: 'success', token: 'dummyToken', message: 'Token issued.' });
});

// 2. Add the test GET route RIGHT HERE (Before the export statement!)
router.get('/test', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Auth routing pipeline is linked and responding!'
  });
});

// 3. This must always remain at the absolute bottom of the file
export default router;
