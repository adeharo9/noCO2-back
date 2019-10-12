// Initialize express router
const router = require('express').Router();

// Load endpoints
const root       = require('./endpoints/root');
const emissions  = require('./endpoints/emissions');

root      (router);
emissions (router);

// Export API routes
module.exports = router;
