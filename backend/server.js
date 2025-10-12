require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const validator = require('validator');
const { checkEnvVariables } = require('./config');

// Check required environment variables
checkEnvVariables();

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware
app.use(helmet()); // Security headers
app.use(xss()); // Prevent XSS attacks

// CORS Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://royalprincesingh.github.io');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Additional security for specific routes
const corsOptions = {
  origin: 'https://royalprincesingh.github.io',
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Body parser with size limit
app.use(express.json({ limit: '10kb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Input validation middleware
const validateInput = (req, res, next) => {
  const { name, email, message } = req.body;

  // Check for empty fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      status: 'error',
      error: 'All fields are required' 
    });
  }

  // Validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({ 
      status: 'error',
      error: 'Please provide a valid email address' 
    });
  }

  // Validate name length
  if (name.length < 2 || name.length > 50) {
    return res.status(400).json({ 
      status: 'error',
      error: 'Name must be between 2 and 50 characters' 
    });
  }

  // Validate message length
  if (message.length < 10 || message.length > 1000) {
    return res.status(400).json({ 
      status: 'error',
      error: 'Message must be between 10 and 1000 characters' 
    });
  }

  // Sanitize inputs
  req.body.name = validator.escape(name);
  req.body.email = validator.normalizeEmail(email);
  req.body.message = validator.escape(message);

  next();
};

// Contact form endpoint
app.post('/api/contact', cors(corsOptions), limiter, validateInput, async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'princesinghsikata@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
Sent: ${new Date().toLocaleString()}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
    .header { background: #0d6efd; color: white; padding: 15px; border-radius: 5px 5px 0 0; margin: -20px -20px 20px; }
    .content { padding: 20px 0; }
    .footer { font-size: 0.8em; color: #666; border-top: 1px solid #ddd; margin-top: 20px; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Portfolio Contact Message</h2>
    </div>
    <div class="content">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0d6efd;">${message}</p>
    </div>
    <div class="footer">
      <p>Sent on: ${new Date().toLocaleString()}</p>
      <p>IP: ${req.ip}</p>
    </div>
  </div>
</body>
</html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Log successful contact attempt
    console.log(`Contact form submission successful from ${email} at ${new Date().toISOString()}`);
    
    res.status(200).json({ 
      status: 'success',
      message: 'Message sent successfully! I will get back to you soon.' 
    });
  } catch (error) {
    // Log the error with details
    console.error('Error sending email:', {
      timestamp: new Date().toISOString(),
      error: error.message,
      email: email,
      name: name
    });

    // Send appropriate error message
    const errorMessage = process.env.NODE_ENV === 'production'
      ? 'Failed to send message. Please try again later.'
      : `Failed to send message: ${error.message}`;

    res.status(500).json({ 
      status: 'error',
      error: errorMessage 
    });
  }
});

// Error handling for invalid routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    status: 'error',
    error: 'Route not found' 
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  
  res.status(err.status || 500).json({
    status: 'error',
    error: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong! Please try again later.'
      : err.message
  });
});

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err);
  server.close(() => {
    process.exit(1);
  });
});