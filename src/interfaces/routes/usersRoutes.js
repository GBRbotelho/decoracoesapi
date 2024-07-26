const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.create);
router.post("/authenticate", userController.authenticate);
router.get("/token", userController.dataToken);
router.get("/", userController.findAll);
router.get("/:id", userController.find);

module.exports = router;
