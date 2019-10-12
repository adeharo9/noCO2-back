// noCO2 project
// Dependencies
require("dotenv").config({ silent: true });

const cors       = require("cors");
const http       = require("http");
const express    = require("express");
const bodyParser = require("body-parser");

// Initialize and configure app
const app = express();

app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize endpoints
const routes = require("./app/resources/routes");
app.use('/', routes);

// Start server
let serverHttp;

if (process.env.ENV == "prd")
{
    serverHttp = http.createServer(app).listen(process.env.PORT_HTTP_PRD || 80, () =>
    {
        console.log("noCO2 API running on port", serverHttp.address().port);
    });
}
else
{
    serverHttp = http.createServer(app).listen(process.env.PORT_HTTP_DEV || 8080, () =>
    {
        console.log("noCO2 API running on port", serverHttp.address().port);
    });
}
