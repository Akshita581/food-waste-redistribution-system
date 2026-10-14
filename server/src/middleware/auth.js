import jwt from 'jsonwebtoken';

// 1. Verifies if a user is logged in via their JWT token
export const protect = async (req, res, next) => {
  let token;

  // Check if token exists in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      
      // Decrypt and verify the token signature
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Inject user metadata (ID and Role) into the request life-cycle
      req.user = {
        id: decoded.id,
        role: decoded.role // Options: 'DONOR', 'NGO', 'VOLUNTEER', 'ADMIN'
      };

      return next();
    } catch (error) {
      return res.status(401).json({ status: 'error', message: 'Not authorized, token invalid' });
    }
  }

  if (!token) {
    return res.status(401).json({ status: 'error', message: 'Access denied. No authentication token provided.' });
  }
};

// 2. Blocks users whose roles don't match the required permissions
export const restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        status: 'error', 
        message: 'Forbidden: You do not have permission to access this endpoint.' 
      });
    }
    next();
  };
};
