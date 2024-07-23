const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.post("/", addressController.create);
router.post("/search", addressController.findAll);

module.exports = router;
