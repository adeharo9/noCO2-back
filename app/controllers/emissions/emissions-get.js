const request = require('request');
const HttpStatusCode  = require('../../resources/http-status-code');

const baseURL = 'https://maps.googleapis.com/maps/api/directions/json';

module.exports = (query) =>
{
    return new Promise((resolve, reject) =>
    {
        // Requestear a API GMaps
        // Llamar C++
        // Apendear respuesta C++ a respuesta GMaps

        const response = HttpStatusCode.ok('success');

        return resolve(response);
    });
};
