const router = require("express").Router();
const controller = require("../../controllers/searchController");

router.route("/:search/:begin/:end")
  .post(controller.scrape
)

module.exports = router