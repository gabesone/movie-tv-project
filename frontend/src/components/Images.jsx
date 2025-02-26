import { Link } from "react-router-dom";

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";

const TMDB_BACKDROP_URL = "https://image.tmdb.org/t/p/w500";

export function Poster({ posterPath }) {
  return (
    <img
      loading="lazy"
      src={`${TMDB_IMAGE_URL}${posterPath}`}
      alt="Poster"
      className="block w-full"
    />
  );
}

export function Backdrop({ backdropPath }) {
  return (
    <img
      loading="lazy"
      src={`${TMDB_BACKDROP_URL}${backdropPath}`}
      alt="Backdrop"
      className="block w-full"
    />
  );
}

export function OverviewPoster({ posterPath, posterName }) {
  return (
    <img
      loading="lazy"
      src={`${TMDB_IMAGE_URL}${posterPath}`}
      alt={`Poster of ${posterName}`}
      className="block w-full max-w-80"
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
      <div className="fadeInPoster transition-transform duration-300 will-change-transform hover:scale-[1.02]">
        <img
          src={`${TMDB_IMAGE_URL}${posterPath}`}
          alt={posterName}
          className="block w-full"
          loading="lazy"
        />
        <h3
          aria-hidden="true"
          className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block"
        >
          {posterName}
        </h3>
        {posterRating > 0 && (
          <div className="hidden w-fit text-gray-400 sm:block">
            <img src="/star.svg" alt="Star" className="mr-2 inline-block" />
            <p className="inline-block text-sm">
              {Number(posterRating).toFixed(1)}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}

export function PlaceholderImage({ img, alt }) {
  return (
    <div className="transition-transform duration-300 will-change-transform hover:scale-[1.02]">
      <img src={img} alt={alt} className="lazyload block w-full" />
      <h3 className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block"></h3>
      <div className="hidden w-fit text-gray-400 sm:block">
        <img src="/star.svg" alt="Star" className="mr-2 inline-block" />
      </div>
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
      <div className="transition-transform duration-300 will-change-transform hover:scale-[1.02]">
        <img
          src={`${TMDB_IMAGE_URL}${posterPath}`}
          alt={posterName}
          className="block w-full"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h3 className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block">
            {posterName}
          </h3>
          {posterRating > 0 && (
            <div className="hidden w-fit text-gray-400 sm:block">
              <img src="/star.svg" alt="Star" className="mr-2 inline-block" />
              <p className="inline-block text-sm">
                {Number(posterRating).toFixed(1)}
              </p>
            </div>
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
      <div className="transition-transform duration-300 will-change-transform hover:scale-[1.02]">
        <img
          src={`${TMDB_IMAGE_URL}${posterPath}`}
          alt={name}
          className="block w-full"
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
      <div className="transition-transform duration-300 will-change-transform hover:scale-[1.02]">
        <img
          src={`${TMDB_IMAGE_URL}${posterPath || profilePath}`}
          alt={tvName || movieTitle || personName}
          className="block w-full"
          width={226}
        />
        <div className="flex flex-col flex-nowrap">
          <h3 className="mb-1 mt-3 hidden text-sm font-medium text-gray-100 sm:block sm:text-base">
            {tvName || movieTitle || personName}
          </h3>
          {posterRating > 0 && (
            <div className="hidden w-fit text-gray-400 sm:block">
              <img src="/star.svg" alt="Star" className="mr-2 inline-block" />
              <p className="inline-block text-sm">
                {Number(posterRating).toFixed(1)}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
