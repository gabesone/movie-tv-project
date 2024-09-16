// Trending movies
export async function getTrendingMovies() {
  try {
    const res = await fetch("/api/movie");
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
