const API_URL = "https://movies-api-gabesone.vercel.app";
const URL_TV_API = "https://api.themoviedb.org/3/discover/tv";

// List of genres for tv shows
export const tvShowGenres = {
  genres: [
    {
      id: 10759,
      name: "Action & Adventure",
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
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "War & Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

// Trending tv shows
export async function getTrendingTVShows() {
  try {
    const res = await fetch(API_URL + "/tv");
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get trending tv shows");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET a single tv show
export async function getTVShow(id) {
  try {
    const res = await fetch(`${API_URL}/tv/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get tv show");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET popular tv shows
export async function getPopularTvShows() {
  try {
    const res = await fetch(`${API_URL}/tv/popular`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get popular tv shows");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET top rated tv shows
export async function getTopRatedTvShows() {
  try {
    const res = await fetch(`${API_URL}/tv/top_rated`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get top rated tv shows");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET currently airing tv shows
export async function getCurrentlyAirTvShows() {
  try {
    const res = await fetch(`${API_URL}/tv/on_the_air`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get currently on air tv shows");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET tv shows airing today
export async function getAirTodayTvShows() {
  try {
    const res = await fetch(`${API_URL}/tv/airing_today`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get tv shows airing today");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}

// GET tv shows by genres
const API_KEY2 = "103e37f7523217a4747a42c3c5fc6d74";

export async function getTvShowGenres(mediaId, page) {
  try {
    const res = await fetch(
      `${URL_TV_API}?api_key=${API_KEY2}&with_genres=${mediaId}&page=${page}`,
    );

    if (!res.ok) throw new Error("Failed to get tv shows by genre");

    return res.json();
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}
