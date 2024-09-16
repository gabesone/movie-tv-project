const TMDB_IMAGE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

export function Poster() {
  return <div></div>;
}

export function PosterBig({ posterPath, posterName }) {
  console.log(posterPath);

  return (
    <img src={`${TMDB_IMAGE_POSTER_URL}/${posterPath}`} alt={posterName} />
  );
}
