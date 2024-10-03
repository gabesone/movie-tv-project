import { SlPicture } from "react-icons/sl";

import { PosterMovieLink, PosterTvLink } from "./Images";

function KnownFor({ filteredMovies, filteredTvShows }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {filteredMovies?.map((movie) =>
          movie.poster_path ? (
            <PosterMovieLink
              key={movie.id}
              posterId={movie.id}
              posterName={movie.title}
              posterPath={movie.poster_path}
              posterRating={movie.vote_average}
            />
          ) : (
            ""
          ),
        )}

        {filteredTvShows?.map((tv) =>
          tv.poster_path ? (
            <PosterTvLink
              key={tv.id}
              posterId={tv.id}
              posterName={tv.name}
              posterPath={tv.poster_path}
              posterRating={tv.vote_average}
            />
          ) : (
            ""
          ),
        )}
      </div>
    </div>
  );
}

export default KnownFor;
