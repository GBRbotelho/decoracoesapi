const express = require("express");
const router = express.Router();
const mpController = require("../controllers/mpController.js");

router.post("/create-preapproval-plan", mpController.createPlan);
router.post("/create-subscription/:id", mpController.createSubscription);
router.post("/create-subscription-star2", mpController.createSubscriptionstar2);
router.post("/create-subscription-star4", mpController.createSubscriptionstar4);
router.post(
  "/create-subscription-premium4",
  mpController.createSubscriptionpremium4
);
router.post(
  "/create-subscription-premium4",
  mpController.createSubscriptionpremium6
);

module.exports = router;
