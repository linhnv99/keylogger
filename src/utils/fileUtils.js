const fs = require("fs");

const readFile = (filePath) => fs.promises.readFile(filePath, "utf-8");

const writeFile = (filePath, data) =>
  fs.promises.writeFile(filePath, data, { encoding: "utf-8", flag: "a" });

module.exports = {
  readFile,
  writeFile,
};
