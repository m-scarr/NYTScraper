const router = require("express").Router();
const controller = require("../../controllers/apiController");

router.route("/add/:id")
  .post(controller.addArticle
)
router.route("/remove/:id")
  .delete(controller.removeArticle
)

module.exports = router