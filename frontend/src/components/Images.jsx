import { Link } from "react-router-dom";

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";

const TMDB_BACKDROP_URL = "https://image.tmdb.org/t/p/w500";

export function Poster({ posterPath }) {
  return (
    <img
      loading="lazy"
      src={`${TMDB_IMAGE_URL}${posterPath}`}
      alt="Poster"
      width="100%"
      height="100%"
    />
  );
}

export function Backdrop({ backdropPath }) {
  return (
    <img
      loading="lazy"
      src={`${TMDB_BACKDROP_URL}${backdropPath}`}
      alt="Backdrop"
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
      className="max-w-80"
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
    <Link to={`/movie/${posterId}`} className="mb-2">
      <div>
        <img
          src={`${TMDB_IMAGE_URL}${posterPath}`}
          alt={`Poster of ${posterName}`}
          className="fadeInPoster transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
        />
        <h3 className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block">
          {posterName}
        </h3>
        {posterRating > 0 && (
          <p className="hidden text-gray-500 sm:block">star {posterRating}</p>
        )}
      </div>
    </Link>
  );
}

export function PlaceholderImage({ img, alt }) {
  return (
    <div>
      <img
        src={img}
        alt={alt}
        className="lazyload transition-transform duration-300 hover:scale-[1.02]"
      />
      <h3 className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block">
        Movie name
      </h3>
      <p className="hidden text-gray-500 sm:block">star</p>
    </div>
  );
}

export function PosterTvLink({
  posterPath,
  posterName,
  posterId,
  posterRating,
}) {
  return (
    <Link to={`/tv/${posterId}`} className="mb-2">
      <div>
        <img
          src={`${TMDB_IMAGE_URL}${posterPath}`}
          alt={`Poster of ${posterName}`}
          className="transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h3 className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block">
            {posterName}
          </h3>
          {posterRating > 0 && (
            <p className="hidden text-gray-500 sm:block">star {posterRating}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export function PersonPoster({ profilePath, profileName }) {
  return (
    <img
      src={TMDB_IMAGE_URL + profilePath}
      alt={profileName}
      className="float-left mb-4 mr-4 w-[50%] lg:w-[100%]"
    />
  );
}

export function PosterPersonLink({ posterPath, name, personId, character }) {
  return (
    <Link to={`/person/${personId}`} className="mb-2">
      <div>
        <img
          src={`${TMDB_IMAGE_URL}${posterPath}`}
          alt={`Poster of ${name}`}
          className="transition-transform duration-300 hover:scale-[1.02]"
          width={226}
        />
        <div className="flex flex-col flex-nowrap">
          <h3 className="mb-1 mt-3 text-sm font-medium text-gray-100 sm:text-base">
            {name}
          </h3>
          <p className="text-xs text-gray-500 sm:text-sm">{character}</p>
        </div>
      </div>
    </Link>
  );
}

export function PosterMulti({
  posterId,
  posterPath,
  profilePath,
  tvName,
  movieTitle,
  personName,
  posterRating,
  mediaType,
}) {
  return (
    <Link to={`/${mediaType}/${posterId}`} className="mb-2">
      <div>
        <img
          src={`${TMDB_IMAGE_URL}${posterPath || profilePath}`}
          alt={`Poster of ${tvName || movieTitle || personName}`}
          className="transition-transform duration-300 hover:scale-[1.02]"
          width={226}
        />
        <div className="flex flex-col flex-nowrap">
          <h3 className="mb-1 mt-3 hidden text-sm font-medium text-gray-100 sm:block sm:text-base">
            {tvName || movieTitle || personName}
          </h3>
          {posterRating > 0 && (
            // TODO: add star component based on rating of the poster
            <p className="hidden text-gray-500 sm:block">star {posterRating}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
