const router = require("express").Router();
const scrapeRoute = require("./scrape")
const getRoute = require("./get");

router.use("/scrape", scrapeRoute)
router.use("/get", getRoute);

module.exports = router;
