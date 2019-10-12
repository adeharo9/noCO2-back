class HttpStatusCode
{
    // 1xx Informational
    static continue                         (description) { return this.genericStatusCode(100, "Continue"                            , description); }
    static switchingProtocols               (description) { return this.genericStatusCode(101, "Switching Protocols"                 , description); }
    static processing                       (description) { return this.genericStatusCode(102, "Processing"                          , description); }

    // 2xx Success
    static ok                               (description) { return this.genericStatusCode(200, "OK"                                  , description); }
    static created                          (description) { return this.genericStatusCode(201, "Created"                             , description); }
    static accepted                         (description) { return this.genericStatusCode(202, "Accepted"                            , description); }
    static nonAuthoritativeInformation      (description) { return this.genericStatusCode(203, "Non-Authoritative Information"       , description); }
    static noContent                        (description) { return this.genericStatusCode(204, "No Content"                          , description); }
    static resetContent                     (description) { return this.genericStatusCode(205, "Reset Content"                       , description); }
    static partialContent                   (description) { return this.genericStatusCode(206, "Partial Content"                     , description); }
    static multiStatus                      (description) { return this.genericStatusCode(207, "Multi-Status"                        , description); }
    static alreadyReported                  (description) { return this.genericStatusCode(208, "Already Reported"                    , description); }
    static imUsed                           (description) { return this.genericStatusCode(226, "IM Used"                             , description); }

    // 3xx Redirection
    static multipleChoices                  (description) { return this.genericStatusCode(300, "Multiple Choices"                    , description); }
    static movedPermanently                 (description) { return this.genericStatusCode(301, "Moved Permanently"                   , description); }
    static found                            (description) { return this.genericStatusCode(302, "Found"                               , description); }
    static seeOther                         (description) { return this.genericStatusCode(303, "See Other"                           , description); }
    static notModified                      (description) { return this.genericStatusCode(304, "Not Modified"                        , description); }
    static useProxy                         (description) { return this.genericStatusCode(305, "Use Proxy"                           , description); }
    static temporaryRedirect                (description) { return this.genericStatusCode(307, "Temporary Redirect"                  , description); }
    static permanentRedirect                (description) { return this.genericStatusCode(308, "Permanent Redirect"                  , description); }

    // 4xx Client Error
    static badRequest                       (description) { return this.genericStatusCode(400, "Bad Request"                         , description); }
    static unauthorized                     (description) { return this.genericStatusCode(401, "Unauthorized"                        , description); }
    static paymentRequired                  (description) { return this.genericStatusCode(402, "Payment Required"                    , description); }
    static forbidden                        (description) { return this.genericStatusCode(403, "Forbidden"                           , description); }
    static notFound                         (description) { return this.genericStatusCode(404, "Not Found"                           , description); }
    static methodNotAllowed                 (description) { return this.genericStatusCode(405, "Method Not Allowed"                  , description); }
    static notAcceptable                    (description) { return this.genericStatusCode(406, "Not Acceptable"                      , description); }
    static proxyAuthenticationRequired      (description) { return this.genericStatusCode(407, "Proxy Authentication Required"       , description); }
    static requestTimeout                   (description) { return this.genericStatusCode(408, "Request Timeout"                     , description); }
    static conflict                         (description) { return this.genericStatusCode(409, "Conflict"                            , description); }
    static gone                             (description) { return this.genericStatusCode(410, "Gone"                                , description); }
    static lengthRequired                   (description) { return this.genericStatusCode(411, "Length Required"                     , description); }
    static preconditionFailed               (description) { return this.genericStatusCode(412, "Precondition Failed"                 , description); }
    static requestEntityTooLarge            (description) { return this.genericStatusCode(413, "Request Entity Too Large"            , description); }
    static requestURITooLong                (description) { return this.genericStatusCode(414, "Request-URI Too Long"                , description); }
    static unsupportedMediaType             (description) { return this.genericStatusCode(415, "Unsupported Media Type"              , description); }
    static requestedRangeNotSatisfiable     (description) { return this.genericStatusCode(416, "Requested Range Not Satisfiable"     , description); }
    static expectationFailed                (description) { return this.genericStatusCode(417, "Expectation Failed"                  , description); }
    static imATeapot                        (description) { return this.genericStatusCode(418, "I'm a teapot"                        , description); }
    static enhanceYourCalm                  (description) { return this.genericStatusCode(420, "Enhance Your Calm"                   , description); }
    static unprocessableEntity              (description) { return this.genericStatusCode(422, "Unprocessable Entity"                , description); }
    static locked                           (description) { return this.genericStatusCode(423, "Locked"                              , description); }
    static failedDependency                 (description) { return this.genericStatusCode(424, "Failed Dependency"                   , description); }
    static reservedForWebDAV                (description) { return this.genericStatusCode(425, "Reserved for WebDAV"                 , description); }
    static upgradeRequired                  (description) { return this.genericStatusCode(426, "Upgrade Required"                    , description); }
    static preconditionRequired             (description) { return this.genericStatusCode(428, "Precondition Required"               , description); }
    static tooManyRequests                  (description) { return this.genericStatusCode(429, "Too Many Requests"                   , description); }
    static requestHeaderFieldsTooLarge      (description) { return this.genericStatusCode(431, "Request Header Fields Too Large"     , description); }
    static noResponse                       (description) { return this.genericStatusCode(444, "No Response"                         , description); }
    static retryWith                        (description) { return this.genericStatusCode(449, "Retry With"                          , description); }
    static blockedByWindowsParentalControls (description) { return this.genericStatusCode(450, "Blocked by Windows Parental Controls", description); }
    static unavailableForLegalReasons       (description) { return this.genericStatusCode(451, "Unavailable For Legal Reasons"       , description); }
    static clientClosedRequest              (description) { return this.genericStatusCode(499, "Client Closed Request"               , description); }

    // 5xx Server Error
    static internalServerError              (description) { return this.genericStatusCode(500, "Internal Server Error"               , description); }
    static notImplemented                   (description) { return this.genericStatusCode(501, "Not Implemented"                     , description); }
    static badGateway                       (description) { return this.genericStatusCode(502, "Bad Gateway"                         , description); }
    static serviceUnavailable               (description) { return this.genericStatusCode(503, "Service Unavailable"                 , description); }
    static gatewayTimeout                   (description) { return this.genericStatusCode(504, "Gateway Timeout"                     , description); }
    static httpVersionNotSupported          (description) { return this.genericStatusCode(505, "HTTP Version Not Supported"          , description); }
    static variantAlsoNegotiates            (description) { return this.genericStatusCode(506, "Variant Also Negotiates"             , description); }
    static insufficientStorage              (description) { return this.genericStatusCode(507, "Insufficient Storage"                , description); }
    static loopDetected                     (description) { return this.genericStatusCode(508, "Loop Detected"                       , description); }
    static bandwidthLimitExceeded           (description) { return this.genericStatusCode(509, "Bandwidth Limit Exceeded"            , description); }
    static notExtended                      (description) { return this.genericStatusCode(510, "Not Extended"                        , description); }
    static networkAuthenticationRequired    (description) { return this.genericStatusCode(511, "Network Authentication Required"     , description); }
    static networkReadTimeoutError          (description) { return this.genericStatusCode(598, "Network read timeout error"          , description); }
    static networkConnectTimeoutError       (description) { return this.genericStatusCode(599, "Network connect timeout error"       , description); }

    // Generic methods
    static genericStatusCode (code, name, description)
    { 
        const res = 
        {
            status: code,
            status_details:
            {
                description: `${description || ""}`,
                name       : `${name}`
            }
        };

        return res;
    };
};

module.exports = HttpStatusCode;
