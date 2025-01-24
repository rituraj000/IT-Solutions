const Service = require("../models/service-model");

const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { getServices };