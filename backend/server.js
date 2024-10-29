// backend/server.js

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const { Pool } = require('pg'); // Import PostgreSQL client
const loadoutsRouter = require('./api/loadouts'); // Import the loadouts routes

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Database connection pool
const pool = new Pool({
    host: process.env.DB_HOST, // e.g., localhost
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port
    user: process.env.DB_USER, // Your database user
    password: process.env.DB_PASSWORD, // Your database password
    database: process.env.DB_NAME, // Your database name
});

// Middleware setup
app.use(cors({
    origin: 'http://localhost:3000', // Your React app's URL
    credentials: true, // Allow credentials for CORS
}));
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(session({
    secret: process.env.SESSION_SECRET, // Session secret from environment variables
    resave: false,
    saveUninitialized: true,
})); 
app.use(passport.initialize());
app.use(passport.session());

// Use the loadouts router for the /api/loadouts endpoint
app.use('/api/loadouts', loadoutsRouter);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error stack
    res.status(500).json({ error: 'Something went wrong!' }); // Send error response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
