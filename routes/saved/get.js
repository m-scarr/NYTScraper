const router = require("express").Router();
const controller = require("../../controllers/savedController");

router.route("/")
  .get(controller.get
)

module.exports = router