const db = require('../models');
const Plan = db.plans;
const Service = db.services;

exports.findAll = async (req, res, next) => {
  await Plan.findAll()
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message:
          err.message || "Failed to reload Plan"
      });
    });
};

exports.serviceList = async (req, res, next) => {
  await Service.findAll({
    include: ["service_plans"],
  })
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message:
          err.message || "Failed to reload Service"
      });
    });
};


