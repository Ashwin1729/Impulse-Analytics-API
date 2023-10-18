// Random request handling middleware

const randomRequestMiddleware = (req, res, next) => {
  return res.status(404).json({
    ERROR:
      "Invalid URL. Please refer to the API Documentation to know all the request endpoints!",
  });
};

module.exports = randomRequestMiddleware;
