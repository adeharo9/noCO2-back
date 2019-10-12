const request = require('request-promise');
const child_process = require('child_process');
const HttpStatusCode  = require('../../resources/http-status-code');

module.exports = (query) =>
{
    const options = {
        uri: process.env.ROUTE_PROVIDER_BASE_URL,
        qs: query,
        json: true
    };

    return request(options).then((res) =>
    {
        /* Execute core program for CO2 emissions calculation */
        const coreOutput = child_process.execSync(process.env.CORE_PROCESS_PATH,
        {
            input: JSON.stringify(res),
            encoding: 'utf-8'
        });
        
        /* Parse core program JSON output */
        const response = JSON.parse(coreOutput);
        const success = HttpStatusCode.ok(response['status']);

        /* Add success status keys as keys to core program response */
        for (const key in success)
        {
            if (success.hasOwnProperty(key))
            {
                response[key] = success[key];
            }
        }

        if (query.hasOwnProperty('emission_index'))
        {
            response['emission_index'] = query['emission_index'];
        }

        return response;
    })
    .catch((err) =>
    {
        const response = HttpStatusCode.internalServerError(`error while requesting route to route provider: ${err}`);
        return response;
    });
};
