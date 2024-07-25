const express = require("express");
const router = express.Router();
const mpController = require("../controllers/mpController.js");

router.post("/create-preapproval-plan", mpController.createPlan);
router.post("/create-subscription", mpController.createSubscription);

module.exports = router;
