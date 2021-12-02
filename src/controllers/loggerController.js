const loggerService = require("../services/loggerService");
const ApiResponse = require("../utils/ApiResponse");
const systemResponse = require("../utils/systemResponse");
const fileUtils = require("../utils/fileUtils");
const { Parser } = require("json2csv");

const getAll = async (req, res, next) => {
  const loggers = await loggerService.getAll();
  res
    .status(200)
    .json(
      ApiResponse(systemResponse.OK.code, systemResponse.OK.message, loggers)
    );
};

const exportCsv = async (req, res, next) => {
  const { loggerId } = req.params;
  const logger = await loggerService.getOne(loggerId);
  const fields = [
    {
      label: "trackingId",
      value: "tracking_id",
    },
    {
      label: "content",
      value: "content",
    },
  ];
  const data = {
    tracking_id: logger[0].tracking_id,
    content: await fileUtils.readFile(__rootDir + "/" + logger[0].file_name),
  };

  const json2csv = new Parser({ fields: fields });

  try {
    const csv = json2csv.parse(data);
    res.attachment("log.csv");
    res.status(200).send(csv);
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAll,
  exportCsv,
};
