const API_URL = "https://movies-api-gabesone.vercel.app";

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
