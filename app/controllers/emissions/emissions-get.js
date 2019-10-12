const HttpStatusCode  = require("../../resources/http-status-code");

module.exports = (query) =>
{
    return new Promise((resolve, reject) =>
    {
        const response = HttpStatusCode.ok('success');

        return resolve(response);
    });
};
