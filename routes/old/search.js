

const router = require("express").Router();
const searchController = require("../../controllers/searchcontroller");

// Matches with "/api/search"
router.route("/")
  .get(searchController.search)


// Matches with "/api/search/:id"
router.route("/:id")
  .post(searchController.save)

module.exports = router;

