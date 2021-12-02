const ApiResponse = (code = 200, message, data) => {
  return {
    code,
    message,
    data
  }
}

module.exports = ApiResponse;