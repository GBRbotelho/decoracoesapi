const express = require("express");
const clientsRoutes = require("./clientsRoutes");
const addressRoutes = require("./addressRoutes");
const mpRoutes = require("./mpRoutes");
const usersRoutes = require("./usersRoutes");
const subscriptionsRoutes = require("./subscriptionsRoutes");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bem-vindo à API!");
});

router.use("/clients", clientsRoutes);
router.use("/address", addressRoutes);
router.use("/users", usersRoutes);
router.use("/subscriptions", subscriptionsRoutes);
router.use("/mp", mpRoutes);

module.exports = router;
