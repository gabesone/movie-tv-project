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
          className="transition-transform duration-300 hover:scale-[1.02]"
          width={226}
        />
        <h3 className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block">
          {posterName}
        </h3>
        <p className="hidden text-gray-500 sm:block">star {posterRating}</p>
      </div>
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
    <Link to={`/tv/${posterId}`} className="mb-2">
      <div>
        <img
          src={`${TMDB_IMAGE_URL}${posterPath}`}
          alt={`Poster of ${posterName}`}
          className="transition-transform duration-300 hover:scale-[1.02]"
          width={226}
        />
        <div className="flex flex-col">
          <h3 className="mb-1 mt-3 hidden truncate text-base font-medium text-gray-100 sm:block">
            {posterName}
          </h3>
          <p className="hidden text-gray-500 sm:block">star {posterRating}</p>
        </div>
      </div>
    </Link>
  );
}

export function PersonPoster({ profilePath, profileName }) {
  return (
    <img
      src={TMDB_IMAGE_URL + profilePath}
      alt={`Profile photo of ${profileName}`}
      className="float-left mr-4 h-[14rem] w-[10rem] md:h-[18rem] md:w-[12rem] lg:float-none lg:mr-8 lg:h-[22rem] lg:w-[16rem] xl:mr-12 xl:h-[26rem] xl:w-[20rem]"
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
          <h3 className="mb-1 mt-3 truncate text-base font-medium text-gray-100">
            {name}
          </h3>
          <p className="text-sm text-gray-500">{character}</p>
        </div>
      </div>
    </Link>
  );
}
