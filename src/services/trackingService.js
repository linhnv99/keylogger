const trackingDb = require("../models/tracking");

const getOne = async (trackingId) => {
  return await trackingDb.getOne(trackingId);
};

module.exports = {
  getOne,
};
