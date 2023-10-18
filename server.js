// core modules import
const express = require("express");

// local modules import
const analyticsRoutes = require("./routes/analyticsRoutes");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
const randomRequestMiddleware = require("./middlewares/randomRequestMiddleware");

const server = express();

server.use(express.json());

// Request handling middlewares

server.use("/api", analyticsRoutes);

server.use("/", (req, res) => {
  res.send(
    "API is running successfully. Please refer to the API Documentation to know all the request endpoints!"
  );
});

server.use(randomRequestMiddleware);
server.use(errorHandlingMiddleware);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("API is running successfuly");
  console.log(`Server started on port ${PORT}`);
});
