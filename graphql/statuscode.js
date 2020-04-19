const status = {
	// Informational - 1xx
	HTTP_100_CONTINUE: {
		statusCode: 100,
		message: 'Continue'
	},
	HTTP_101_SWITCHING_PROTOCOLS: {
		statusCode: 101,
		message: 'Switching Protocols'
	},
	// Successful - 2xx
	HTTP_200_OK: {
		statusCode: 200,
		message: '200 OK'
	},
	HTTP_201_CREATED: {
		statusCode: 201,
		message: 'Created'
	},
	HTTP_202_ACCEPTED: {
		statusCode: 202,
		message: 'Accepted'
	},
	HTTP_203_NON_AUTHORITATIVE_INFORMATION: {
		statusCode: 203,
		message: 'Non Authoritative Information'
	},
	HTTP_204_NO_CONTENT: {
		statusCode: 204,
		message: 'No Content'
	},
	HTTP_205_RESET_CONTENT: {
		statusCode: 205,
		message: 'Reset Content'
	},
	HTTP_206_PARTIAL_CONTENT: {
		statusCode: 206,
		message: 'Partial Content'
	},
	HTTP_207_MULTI_STATUS: {
		statusCode: 207,
		message: 'Multi Status'
	},
	// Redirection - 3xx
	HTTP_300_MULTIPLE_CHOICES: {
		statusCode: 300,
		message: 'Multiple Choices'
	},
	HTTP_301_MOVED_PERMANENTLY: {
		statusCode: 301,
		message: 'Moved Permanently'
	},
	HTTP_302_FOUND: {
		statusCode: 302,
		message: '302 Found'
	},
	HTTP_303_SEE_OTHER: {
		statusCode: 303,
		message: 'See Other'
	},
	HTTP_304_NOT_MODIFIED: {
		statusCode: 304,
		message: 'Not modified'
	},
	HTTP_305_USE_PROXY: {
		statusCode: 305,
		message: 'Use Proxy'
	},
	HTTP_306_RESERVED: {
		statusCode: 306,
		message: 'Reserved'
	},
	HTTP_307_TEMPORARY_REDIRECT: {
		statusCode: 307,
		message: 'Temporary Redirect'
	},
	// Client Error - 4xx
	HTTP_400_BAD_REQUEST: {
		statusCode: 400,
		message: 'Bad Request'
	},
	HTTP_401_UNAUTHORIZED: {
		statusCode: 401,
		message: 'Unauthorized'
	},
	HTTP_402_PAYMENT_REQUIRED: {
		statusCode: 402,
		message: 'Payment Required'
	},
	HTTP_403_FORBIDDEN: {
		statusCode: 403,
		message: 'Forbidden'
	},
	HTTP_404_NOT_FOUND: {
		statusCode: 404,
		message: 'Not found'
	},
	HTTP_405_METHOD_NOT_ALLOWED: {
		statusCode: 405,
		message: 'Method Not Allowed'
	},
	HTTP_406_NOT_ACCEPTABLE: {
		statusCode: 406,
		message: 'Not Accepted'
	},
	HTTP_407_PROXY_AUTHENTICATION_REQUIRED: {
		statusCode: 407,
		message: 'Proxy Authentication Required'
	},
	HTTP_408_REQUEST_TIMEOUT: {
		statusCode: 408,
		message: 'Request Timeout'
	},
	HTTP_409_CONFLICT: {
		statusCode: 409,
		message: 'Conflict'
	},
	HTTP_410_GONE: {
		statusCode: 410,
		message: '410 Gone'
	},
	HTTP_411_LENGTH_REQUIRED: {
		statusCode: 411,
		message: 'Length Required'
	},
	HTTP_412_PRECONDITION_FAILED: {
		statusCode: 412,
		message: 'Precondition Failed'
	},
	HTTP_413_REQUEST_ENTITY_TOO_LARGE: {
		statusCode: 413,
		message: 'Request Entity Too Large'
	},
	HTTP_414_REQUEST_URI_TOO_LONG: {
		statusCode: 414,
		message: 'Request Uri Too Long'
	},
	HTTP_415_UNSUPPORTED_MEDIA_TYPE: {
		statusCode: 415,
		message: 'Unsupported Media Type'
	},
	HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE: {
		statusCode: 416,
		message: 'Requested Range Not Satisfiable'
	},
	HTTP_417_EXPECTATION_FAILED: {
		statusCode: 417,
		message: 'Exception Failed'
	},
	HTTP_422_UNPROCESSABLE_ENTITY: {
		statusCode: 422,
		message: 'Unprocessable Entity'
	},
	HTTP_423_LOCKED: {
		statusCode: 423,
		message: '423 Locked'
	},
	HTTP_424_FAILED_DEPENDENCY: {
		statusCode: 424,
		message: 'Failed Dependency'
	},
	HTTP_428_PRECONDITION_REQUIRED: {
		statusCode: 428,
		message: 'Precondition Required'
	},
	HTTP_429_TOO_MANY_REQUESTS: {
		statusCode: 429,
		message: 'Too Many Requests'
	},
	HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE: {
		statusCode: 431,
		message: 'Request Header Fields Too Large'
	},
	HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS: {
		statusCode: 451,
		message: 'Unavailable For Legal Reasons'
	},
	// Server Error - 5xx
	HTTP_500_INTERNAL_SERVER_ERROR: {
		statusCode: 500,
		message: 'Internal Server Error'
	},
	HTTP_501_NOT_IMPLEMENTED: {
		statusCode: 501,
		message: 'Not Implemented`'
	},
	HTTP_502_BAD_GATEWAY: {
		statusCode: 502,
		message: 'Bad Gateway'
	},
	HTTP_503_SERVICE_UNAVAILABLE: {
		statusCode: 503,
		message: 'Service Unavailable'
	},
	HTTP_504_GATEWAY_TIMEOUT: {
		statusCode: 504,
		message: 'Gateway Timeout'
	},
	HTTP_505_HTTP_VERSION_NOT_SUPPORTED: {
		statusCode: 505,
		message: 'HTTP Version Not Supported'
	},
	HTTP_507_INSUFFICIENT_STORAGE: {
		statusCode: 507,
		message: 'Insufficient Storage'
	},
	HTTP_511_NETWORK_AUTHENTICATION_REQUIRED: {
		statusCode: 511,
		message: 'Network Authentication Required'
	}
}

module.exports = {
    status: status
}