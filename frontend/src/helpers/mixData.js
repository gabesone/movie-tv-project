export function mixData(mediaData) {
  const id = mediaData.id;
  const title = mediaData.title ? mediaData.title : mediaData.name;
  const description = mediaData.overview;
  const backdrop = mediaData.backdrop_path;
  const year = mediaData.release_date
    ? mediaData.release_date.slice(0, 4)
    : mediaData.first_air_date.slice(0, 4);
  const rating = mediaData.vote_average.toFixed(1);

  return { id, backdrop, description, year, rating, title };
}

export function mixMovieData(mediaData) {
  const released = mediaData.release_date
    ? mediaData.release_date
    : mediaData.first_air_date;
  const runtime = mediaData.runtime ? mediaData.runtime : "";
  const director = mediaData.credits.crew
    ? mediaData.credits.crew.filter((director) => director.job === "Director")
    : "";
  const budget = mediaData.budget ? mediaData.budget : 0;
  const revenue = mediaData.revenue ? mediaData.revenue : 0;
  const genre = mediaData.genres ? mediaData.genres : "";
  const status = mediaData.status ? mediaData.status : "";
  const language = mediaData.spoken_languages
    ? mediaData.spoken_languages[0].english_name
    : "";
  const production = mediaData.production_companies
    ? mediaData.production_companies
    : "";
  const posterPath = mediaData.poster_path ? mediaData.poster_path : "";
  const title = mediaData.title ? mediaData.title : "";

  return {
    released,
    runtime,
    director,
    budget,
    revenue,
    genre,
    status,
    language,
    production,
    posterPath,
    title,
  };
}

export function mixTvShowData(mediaData) {
  const startDate = mediaData.first_air_date ? mediaData.first_air_date : "";
  const finishDate = mediaData.last_air_date ? mediaData.last_air_date : "";
  const creator = mediaData.created_by ? mediaData.created_by : "";
  const genre = mediaData.genres ? mediaData.genres : "";
  const seasons = mediaData.number_of_seasons
    ? mediaData.number_of_seasons
    : "";
  const episodes = mediaData.number_of_episodes
    ? mediaData.number_of_episodes
    : "";
  const status = mediaData.status ? mediaData.status : "";
  const language = mediaData.spoken_languages
    ? mediaData.spoken_languages[0].english_name
    : "";
  const network = mediaData.networks ? mediaData.networks : "";
  const posterPath = mediaData.poster_path ? mediaData.poster_path : "";
  const title = mediaData.name ? mediaData.name : "";

  return {
    startDate,
    finishDate,
    creator,
    genre,
    seasons,
    episodes,
    status,
    language,
    network,
    posterPath,
    title,
  };
}
