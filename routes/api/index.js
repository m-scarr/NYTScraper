const router = require("express").Router();
const articlesRoutes = require("./article");
const commentsRoutes = require("./comment");

// Book routes
router.use("/article", articlesRoutes);
router.use("/comment", commentsRoutes);

module.exports = router;
