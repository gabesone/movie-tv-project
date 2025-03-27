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
  // posterPath,
  // posterName,
  // posterId,
  // posterRating,
  poster,
}) {
  return (
    <Link to={`/tv/`} className="bg-sky-400">
      <div className="fadeInPoster w-80 transition-transform duration-300 will-change-transform hover:scale-[1.02]">
        {poster ? (
          <img
            src={`${TMDB_IMAGE_URL}${poster.poster_path}`}
            alt={poster.name}
            className="block w-full"
            loading="lazy"
          />
        ) : (
          <div className="relative bg-slate-800 pb-[200%]">
            <p></p>
            <span className="absolute bottom-0 left-0 right-0 top-0 block h-full w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#999"
              >
                <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
              </svg>
            </span>
          </div>
        )}

        {/* <div className="flex flex-col">
          <h3 className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block">
            {poster.name}
          </h3>
          {poster.vote_average > 0 && (
            <div className="hidden w-fit text-gray-400 sm:block">
              <img src="/star.svg" alt="Star" className="mr-2 inline-block" />
              <p className="inline-block text-sm">
                {Number(poster.vote_average).toFixed(1)}
              </p>
            </div>
          )}
        </div> */}
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
