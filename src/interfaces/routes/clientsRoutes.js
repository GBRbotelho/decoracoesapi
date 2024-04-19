const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.post("/", clientController.create);

module.exports = router;
