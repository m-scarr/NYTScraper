const router = require("express").Router();
const searchRoutes = require("./search");
const resultsRoutes = require("./results");

// Book routes
router.use("/search", searchRoutes);
router.use("/results", resultsRoutes)

module.exports = router;
