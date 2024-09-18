const express = require("express");
const {
  getPopularTvShows,
  getTrendingTvShows,
  getTvShow,
  getTopRatedTvShows,
  getCurrentlyAirTvShows,
  getAirTodayTvShows,
} = require("../controllers/tvController");

const router = express.Router();

// GET trending tv shows
router.get("/", getTrendingTvShows);

// GET single tv show
router.get("/:id", getTvShow);

// GET popular tv shows
router.get("/popular", getPopularTvShows);

// GET top rated tv shows
router.get("/top_rated", getTopRatedTvShows);

// GET currently airing tv shows
router.get("/on_the_air", getCurrentlyAirTvShows);

// GET tv shows airing today
router.get("/airing_today", getAirTodayTvShows);

module.exports = router;
