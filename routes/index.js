const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const searchRoutes = require("./search")
const savedRoutes = require("./saved")

// API Routes
router.use("/api", apiRoutes);
router.use("/search", searchRoutes);
router.use("/saved", savedRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client"));
});

module.exports = router;

// /api/addArticle/:id
// /api/removeArticle/:id
// /api/addComment/:id:comment
// /api/removeComment/:id:comment
// /search/scrape+query
// /search/get
// saved/get