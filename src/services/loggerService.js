const loggerDb = require("../models/logger");

const getAll = async () => {
  return await loggerDb.getAll();
};

const getOne = async (id) => {
  return await loggerDb.getOne(id);
};

module.exports = {
  getAll,
  getOne,
};
