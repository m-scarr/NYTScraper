const router = require("express").Router();
const controller = require("../../controllers/apiController");

router.route("/add/:id/:comment")
  .post(controller.addComment
)
router.route("/remove/:id/:comment")
  .delete(controller.removeComment
)

module.exports = router