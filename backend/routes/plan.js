const path = require('path');

const express = require('express');

const planController = require('../controllers/plan');

const router = express.Router();

router.get('/plan-list', planController.findAll);
router.get('/service-list', planController.serviceList);

module.exports = router;
