class ApiError extends Error {
  constructor(httpStatusCode, message, isOperational = true, stack = '') {
    super(message);
    this.httpStatusCode = httpStatusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
