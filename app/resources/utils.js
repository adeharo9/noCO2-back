module.exports =
{
    /* Generic endpoint handler */
    endpointHandler: (promise, res) =>
    {
        promise.then((data) =>
        {
            res.status(data.status || 200).json(data);
        })
        .catch((err) =>
        {
            res.status(err.status || 500).json(err);
        });
    }
};
