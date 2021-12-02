const systemResponse = {
  OK: {
    code: 200,
    message: "success"
  },
  BAD_REQUEST: {
    code: 400,
    message: "bad request"
  },
  NOT_FOUND: {
    code: 404,
    message: "not found"
  },
  INTERNAL_SERVER: {
    code: 500, 
    message: "internal server"
  }
  // custome code 1xx -> 5xx
}

module.exports = systemResponse;