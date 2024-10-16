const API_URL = "https://movies-api-gabesone.vercel.app";
const URL_API = "https://api.themoviedb.org/3/discover/movie";

// List of genres for movies
export const movieGenres = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

// GET trending movies
export async function getTrendingMovies() {
  try {
    const res = await fetch(API_URL + "/movie");
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get trending movies");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET a single movie
export async function getMovie(id) {
  try {
    const res = await fetch(`${API_URL}/movie/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get movie");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET popular movies
export async function getPopularMovies() {
  try {
    const res = await fetch(`${API_URL}/movie/popular`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get popular movies");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET top rated movies
export async function getTopRatedMovies() {
  try {
    const res = await fetch(`${API_URL}/movie/top_rated`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get top rated movies");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET upcoming movies
export async function getUpcomingMovies() {
  try {
    const res = await fetch(`${API_URL}/movie/upcoming`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get upcoming movies");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET now playing movies
export async function getNowPlayingMovies() {
  try {
    const res = await fetch(`${API_URL}/movie/now_playing`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get now playing movies");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET movies by genres
const API_KEY2 = "103e37f7523217a4747a42c3c5fc6d74";

export async function getMoviesGenres(mediaId, page) {
  try {
    const res = await fetch(
      `${URL_API}?api_key=${API_KEY2}&with_genres=${mediaId}&page=${page}`,
    );

    if (!res.ok) throw new Error("Failed to get movies by genre");

    return res.json();
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

const MOVIE_RE = "https://api.themoviedb.org/3/movie";

// GET movies recommendations
export async function getMoviesRecommendations(movieId) {
  try {
    const res = await fetch(
      `${MOVIE_RE}/${movieId}/recommendations?api_key=${API_KEY2}`,
    );

    if (!res.ok) throw new Error("Failed to get movie recommendations");

    return res.json();
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}
