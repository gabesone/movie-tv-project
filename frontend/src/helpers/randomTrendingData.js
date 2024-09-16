// Receive two arrays of data, one array with trending
// movies and another array with trending tv shows
export function randomTrendingData(arrMovie, arrTv) {
  const randomMediaType = 1 + Math.floor(Math.random() * 2);

  // If randomMediaType is equal to 1 return a movie
  if (randomMediaType === 1) {
    const randomMovieArr = Math.floor(Math.random() * arrMovie.results.length);

    const { id } = arrMovie.results[randomMovieArr];
    return { randomMediaType, id };
  }

  // If randomMediaType is equal to 2 return a tv show
  const randomTvArr = Math.floor(Math.random() * arrTv.results.length);

  const { id } = arrTv.results[randomTvArr];

  return { randomMediaType, id };
}
