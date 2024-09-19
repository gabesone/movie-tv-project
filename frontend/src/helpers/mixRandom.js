export function randomTrendingHero() {}

// function to get a random movie
export function randomMovieHero(
  popularMovies,
  ratedMovies,
  upcomingMovies,
  playingMovies,
) {
  // Receive a random value between 1 - 4
  const randomMovie = 1 + Math.floor(Math.random() * 4);

  // popularMovies
  if (randomMovie === 1) {
    const randomArr = Math.floor(Math.random() * popularMovies.results.length);

    return popularMovies.results[randomArr];
  }

  // ratedMovies
  if (randomMovie === 2) {
    const randomArr = Math.floor(Math.random() * ratedMovies.results.length);

    return ratedMovies.results[randomArr];
  }

  // upcomingMovies
  if (randomMovie === 3) {
    const randomArr = Math.floor(Math.random() * upcomingMovies.results.length);

    return upcomingMovies.results[randomArr];
  }

  // playingMovies
  const randomArr = Math.floor(Math.random() * playingMovies.results.length);

  return playingMovies.results[randomArr];
}

// function to get a random tv show
export function randomTvHero(
  popularTvShows,
  ratedTvShows,
  currentlyTvShows,
  todayTvShows,
) {
  // Receive a random value between 1 - 4
  const randomTvShow = 1 + Math.floor(Math.random() * 4);

  // popular tv shows
  if (randomTvShow === 1) {
    const randomArr = Math.floor(Math.random() * popularTvShows.results.length);

    return popularTvShows.results[randomArr];
  }

  // rated tv shows
  if (randomTvShow === 2) {
    const randomArr = Math.floor(Math.random() * ratedTvShows.results.length);

    return ratedTvShows.results[randomArr];
  }

  // currently tv shows
  if (randomTvShow === 3) {
    const randomArr = Math.floor(
      Math.random() * currentlyTvShows.results.length,
    );

    return currentlyTvShows.results[randomArr];
  }

  // today tv shows
  const randomArr = Math.floor(Math.random() * todayTvShows.results.length);

  return todayTvShows.results[randomArr];
}
