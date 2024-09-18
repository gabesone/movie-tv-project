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

// export async function getTrendings() {
//   try {
//     const [movieData, tvData] = await Promise.all([
//       getTrendingMovies(),
//       getTrendingTVShows(),
//     ]);

//     const selectedHero = randomHero(movieData, tvData);
//     const mediaType = selectedHero.media_type;

//     if (selectedHero.media_type === "movie") {
//       const randomData = await getMovie(selectedHero.id);
//       return { mediaType, randomData };
//     }

//     const randomData = await getTVShow(selectedHero.id);
//     return { mediaType, randomData };
//   } catch (error) {
//     console.log(error.message);
//     throw Error(error.message);
//   }
// }
