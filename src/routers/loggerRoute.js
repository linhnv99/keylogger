const express = require("express");
const router = express.Router();
const loggerController = require("../controllers/loggerController");
const { catchAsync } = require("../middlewares/errorHandler");

// router.route() //  get param
/**
 * exam:
 *  router.route("/:id")
 *  localhost:8080/user/1
 *  route param: id = 1
 */

router.route("/")
      .get(catchAsync(loggerController.getAll));

router.route("/exports/:loggerId")
      .get(catchAsync(loggerController.exportCsv));

module.exports = router;
