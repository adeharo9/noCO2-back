const endpointHandler = require('../utils').endpointHandler;
const emissionsGet = require('../../controllers/emissions/emissions-get');

module.exports = (router) =>
{
    /* Emissions endpoint GET request handler */
    router.get('/emissions', (req, res) =>
    {
        endpointHandler(emissionsGet(req.query), res);
    });
};
