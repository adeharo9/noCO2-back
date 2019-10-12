const request = require('request-promise');
const child_process = require('child_process');
const HttpStatusCode  = require('../../resources/http-status-code');

const baseURL = 'https://maps.googleapis.com/maps/api/directions/json';

module.exports = (query) =>
{
    const options = {
        uri: process.env.ROUTE_PROVIDER_BASE_URL,
        qs: query,
        json: true
    };

    return request(options).then((res) =>
    {
        let coreOutput;
        child_process.execSync(process.env.CORE_PROCESS_PATH,
        {
            stdio: [JSON.stringify(res), process.stdout, process.stderr]
        });
        
        const response = coreOutput;
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
