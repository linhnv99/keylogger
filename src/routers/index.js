const express = require("express");
const router = express.Router();

const loggerRoute = require("./loggerRoute");

// chỉ đỉnh root router 
const defaultRoutes = [
  {
    path: "/loggers",
    route: loggerRoute // sub router
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;