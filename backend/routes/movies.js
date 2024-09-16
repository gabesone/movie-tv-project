const express = require("express");
const {
  getTrendingMovies,
  getMovie,
} = require("../controllers/movieController");

const router = express.Router();

// GET trending movies
router.get("/", getTrendingMovies);

// GET a single movie
router.get("/:id", getMovie);

module.exports = router;
