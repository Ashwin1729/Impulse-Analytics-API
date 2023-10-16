const randomRequestMiddleware = (req, res, next) => {
  return res.status(404).json({
    ERROR: "Invalid URL. Please refer API documention for all valid requests.",
  });
};

module.exports = randomRequestMiddleware;
