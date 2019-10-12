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
        const coreOutput = child_process.execSync(process.env.CORE_PROCESS_PATH,
        {
            input: JSON.stringify(res),
            encoding: 'ascii'
        });
        
        const response = JSON.parse(coreOutput);
        const success = HttpStatusCode.ok(response['status']);

        for (const key in success)
        {
            if (success.hasOwnProperty(key))
            {
                response[key] = success[key];
            }
        }

        return response;
    })
    .catch((err) =>
    {
        const response = HttpStatusCode.internalServerError('error while requesting route to route provider');
        return response;
    });
};
