const express = require("express");

const analyticsRoutes = require("./routes/analyticsRoutes");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
const randomRequestMiddleware = require("./middlewares/randomRequestMiddleware");

const server = express();

server.use(express.json());

server.use("/", (req, res, next) => {
  console.log("API is running successfuly");
  next();
});

server.use("/api", analyticsRoutes);

server.use(randomRequestMiddleware);
server.use(errorHandlingMiddleware);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
