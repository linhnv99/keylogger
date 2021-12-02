const catchAsync = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => next(err))
}

const errorHandler = (err, req, res, next) => {
  const { httpStatusCode, message } = err;
  // xử lý common cho error: 1xx -> 5xx
  res.status(httpStatusCode).json({
    code: httpStatusCode,
    message
  })
}

module.exports = {
  catchAsync,
  errorHandler
}