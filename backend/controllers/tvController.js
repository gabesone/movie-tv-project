const TMDB_URL = "https://api.themoviedb.org/3";

// GET trending tv shows
// https://api.themoviedb.org/3/trending/tv/{time_window}
const getTrendingTvShows = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/trending/tv/week?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET a single tv show
// https://api.themoviedb.org/3/tv/{series_id}
const getTvShow = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `${TMDB_URL}/tv/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits,images`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET popular tv shows
// https://api.themoviedb.org/3/tv/popular
const getPopularTvShows = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/tv/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET top rated tv shows
// https://api.themoviedb.org/3/tv/top_rated
const getTopRatedTvShows = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/tv/top_rated?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET currently airing tv shows
// https://api.themoviedb.org/3/tv/on_the_air
const getCurrentlyAirTvShows = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/tv/on_the_air?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET tv shows airing today
// https://api.themoviedb.org/3/tv/airing_today
const getAirTodayTvShows = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_URL}/tv/airing_today?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTrendingTvShows,
  getTvShow,
  getPopularTvShows,
  getTopRatedTvShows,
  getCurrentlyAirTvShows,
  getAirTodayTvShows,
};
