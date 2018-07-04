const router = require("express").Router();
const searchController = require("../../controllers/searchcontroller");

// Matches with "/api/search"
router.route("/")
  .get(searchController.getResults)

  module.exports = router
