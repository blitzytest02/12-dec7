/**
 * Express.js Server Application Entry Point
 * 
 * This is a tutorial-style Node.js server that demonstrates basic Express.js
 * routing with two GET endpoints:
 * - Root path '/' returns 'Hello world'
 * - Evening path '/evening' returns 'Good evening'
 * 
 * @description Main application file for the Express.js tutorial server
 * @requires express ^5.2.1
 */

// Import Express.js framework using CommonJS require pattern
// Express provides HTTP routing, request/response handling, and middleware support
const express = require('express');

// Initialize Express application instance
// The express() function creates a new Express application object
const app = express();

// Configure server port from environment variable with fallback to default
// This allows flexible deployment across different environments
// - Production: Set PORT environment variable (e.g., PORT=8080)
// - Development: Uses default port 3000
const PORT = process.env.PORT || 3000;

/**
 * Root Route Handler
 * 
 * GET / - Returns a simple greeting message
 * 
 * @route GET /
 * @returns {string} Plain text response 'Hello world'
 * 
 * Example usage:
 *   curl http://localhost:3000/
 *   Response: Hello world
 */
app.get('/', (req, res) => {
  // Send plain text response using res.send()
  // CRITICAL: Response text is exactly 'Hello world' (lowercase 'w')
  res.send('Hello world');
});

/**
 * Evening Route Handler
 * 
 * GET /evening - Returns an evening greeting message
 * 
 * @route GET /evening
 * @returns {string} Plain text response 'Good evening'
 * 
 * Example usage:
 *   curl http://localhost:3000/evening
 *   Response: Good evening
 */
app.get('/evening', (req, res) => {
  // Send plain text response using res.send()
  // CRITICAL: Response text is exactly 'Good evening' (capital 'G', lowercase 'e')
  res.send('Good evening');
});

/**
 * Start the HTTP Server
 * 
 * The server listens on the configured PORT and logs a confirmation message
 * when successfully started. This enables easy verification that the server
 * is running and accepting connections.
 */
app.listen(PORT, () => {
  // Log server startup confirmation with the active port number
  console.log(`Server running on port ${PORT}`);
});
