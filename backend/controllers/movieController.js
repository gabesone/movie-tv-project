const TMDB_URL = "https://api.themoviedb.org/3";

// GET trending movies
// https://api.themoviedb.org/3/trending/movie/{time_window}
const getTrendingMovies = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET a single movie
// https://api.themoviedb.org/3/movie/{movie_id}
const getMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `${TMDB_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits,images`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET popular movies
// https://api.themoviedb.org/3/movie/popular
const getPopularMovies = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET top rated movies
// https://api.themoviedb.org/3/movie/top_rated
const getTopRatedMovies = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET upcoming movies
// https://api.themoviedb.org/3/movie/upcoming
const getUpcomingMovies = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET now playing movies
// https://api.themoviedb.org/3/movie/now_playing
const getNowPlayingMovies = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTrendingMovies,
  getMovie,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
};
