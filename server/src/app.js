import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import our system route components
import authRoutes from './routes/authRoutes.js';
import donorRoutes from './routes/donorRoutes.js';
import ngoRoutes from './routes/ngoRoutes.js';
import volunteerRoutes from './routes/volunteerRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Base Monitor Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'FoodBridge Backend Server is running smoothly!'
  });
});

// Mount our sub-routes to specific endpoint stems
app.use('/api/auth', authRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/ngo', ngoRoutes);
app.use('/api/volunteer', volunteerRoutes);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

export default app;
