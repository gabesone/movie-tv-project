// https://api.themoviedb.org/3/trending/tv/{time_window}

const TMDB_URL = "https://api.themoviedb.org/3";

// GET trending tv shows
const getTrendingTVShows = async (req, res) => {
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
const getTVShow = async (req, res) => {
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

module.exports = { getTrendingTVShows, getTVShow };
