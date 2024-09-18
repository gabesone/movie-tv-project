const express = require("express");
const {
  getTrendingMovies,
  getMovie,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
} = require("../controllers/movieController");

const router = express.Router();

// GET trending movies
router.get("/", getTrendingMovies);

// GET a single movie
router.get("/:id", getMovie);

// GET popular movies
router.get("/popular", getPopularMovies);

// GET top rated movies
router.get("/top_rated", getTopRatedMovies);

// GET upcoming movies
router.get("/upcoming", getUpcomingMovies);

// GET now playing movies
router.get("/now_playing", getNowPlayingMovies);

module.exports = router;
