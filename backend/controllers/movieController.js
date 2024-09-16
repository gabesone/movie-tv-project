// https://api.themoviedb.org/3/trending/movie/{time_window}

const TMDB_URL = "https://api.themoviedb.org/3";

// GET trending movies
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
const getMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `${TMDB_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTrendingMovies, getMovie };
