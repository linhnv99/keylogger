const express = require("express");
const routes = require("./src/routers");
const { errorHandler } = require("./src/middlewares/errorHandler");
const ApiError = require("./src/utils/ApiError");

const app = express();
const port = 8080;

global.__rootDir = __dirname;
//init route
//apply context path
// app.use("context-path", routes);
app.use(routes);

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(404, "Not found"));
});

// global error handler
app.use(errorHandler);

app.listen(port, () => console.log(`http://localhost:${port}`));
