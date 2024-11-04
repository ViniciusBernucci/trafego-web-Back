const express = require("express");
const router = express.Router();
const MetricasController = require("../controllers/MetricasController");

router.get("/", MetricasController.showMetricas);

module.exports = router;