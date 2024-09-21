// GET trending movies
export async function getTrendingMovies() {
  try {
    const res = await fetch("/api/proxy?path=/movie");
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
    const res = await fetch(`/api/movie/${id}`);
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
    const res = await fetch("/api/movie/popular");
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
    const res = await fetch("/api/movie/top_rated");
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
    const res = await fetch("/api/movie/upcoming");
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
    const res = await fetch("/api/movie/now_playing");
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to get now playing movies");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
}
