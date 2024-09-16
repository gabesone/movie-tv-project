const express = require("express");
const {
  getTrendingTVShows,
  getTVShow,
} = require("../controllers/tvController");

const router = express.Router();

// GET trending tv shows
router.get("/", getTrendingTVShows);

// GET single tv show
router.get("/:id", getTVShow);

module.exports = router;
