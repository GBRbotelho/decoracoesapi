const express = require("express");
const clientsRoutes = require("./clientsRoutes");
const mpRoutes = require("./mpRoutes");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bem-vindo à API!");
});

router.use("/clients", clientsRoutes);
router.use("/mp", mpRoutes);

module.exports = router;
