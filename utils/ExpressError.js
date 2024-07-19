//custom error to send error message with status code
class ExpressError extends Error {   //ExpressError class is taking the properties of error class
    constructor(statusCode, message) {   //constructor is calling super function
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;