const router = require("express").Router();
const controller = require("../../controllers/searchController");

router.route("/")
  .get(controller.get
)

module.exports = router