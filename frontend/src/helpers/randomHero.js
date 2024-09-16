function randomHero(movies, tv) {
  const randomMedia = 1 + Math.floor(Math.random() * 2);

  // If randomMedia is equal to 1 return a Movie
  if (randomMedia === 1) {
    const randomArray = Math.floor(Math.random() * movies.results.length);
    const {
      id,
      title,
      overview,
      backdrop_path,
      release_date,
      vote_average,
      media_type,
    } = movies.results[randomArray];

    return {
      id,
      title,
      overview,
      backdrop_path,
      release_date,
      vote_average,
      media_type,
    };
  }

  // If randomMedia is equal to 2 return a TV Show
  const randomArray = Math.floor(Math.random() * tv.results.length);
  const {
    id,
    name: title,
    overview,
    backdrop_path,
    first_air_date: release_date,
    vote_average,
    media_type,
  } = tv.results[randomArray];

  return {
    id,
    title,
    overview,
    backdrop_path,
    release_date,
    vote_average,
    media_type,
  };
}

export default randomHero;
