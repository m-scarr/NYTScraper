const router = require("express").Router();
const getRoute = require("./get");

// Book routes
router.use("/get", getRoute);

module.exports = router;
