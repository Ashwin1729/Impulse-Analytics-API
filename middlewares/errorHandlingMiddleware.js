const errorHandlingMiddleware = (error, req, res, next) => {
  return res.status(error.httpStatusCode).json({ ERROR: error.message });
};

module.exports = errorHandlingMiddleware;
