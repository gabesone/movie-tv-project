import { Link } from "react-router-dom";

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export function Poster({ posterPath }) {
  return (
    <img
      loading="lazy"
      src={`${TMDB_IMAGE_URL}${posterPath}`}
      alt="Poster"
      className="h-full max-w-56"
      width="100%"
      height="100%"
    />
  );
}

export function Backdrop({ backdropPath }) {
  return (
    <img
      loading="lazy"
      src={`${TMDB_IMAGE_URL}${backdropPath}`}
      alt="Backdrop"
      className="h-full max-w-64"
      width="100%"
      height="100%"
    />
  );
}

export function OverviewPoster({ posterPath, posterName }) {
  return (
    <img
      loading="lazy"
      src={`${TMDB_IMAGE_URL}${posterPath}`}
      alt={`Poster of ${posterName}`}
      width="100%"
      height="100%"
      className="h-full max-w-80"
    />
  );
}

export function PosterMovieLink({
  posterPath,
  posterName,
  posterId,
  posterRating,
}) {
  return (
    <Link to={`/movie/${posterId}`}>
      <img
        src={`${TMDB_IMAGE_URL}${posterPath}`}
        alt={`Poster of ${posterName}`}
        className="transition-transform duration-300 hover:scale-[1.02]"
      />
      <h3 className="my-2 text-base font-medium">{posterName}</h3>
      <p className="text-gray-500">{posterRating}</p>
    </Link>
  );
}

export function PosterTvLink({
  posterPath,
  posterName,
  posterId,
  posterRating,
}) {
  return (
    <Link to={`/tv/${posterId}`}>
      <img
        src={`${TMDB_IMAGE_URL}${posterPath}`}
        alt={`Poster of ${posterName}`}
        className="transition-transform duration-300 hover:scale-[1.02]"
      />
      <h3 className="my-2 text-base font-medium">{posterName}</h3>
      <p className="text-gray-500">{posterRating}</p>
    </Link>
  );
}
