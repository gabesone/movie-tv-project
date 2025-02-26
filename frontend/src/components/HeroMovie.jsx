import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlControlPlay } from "react-icons/sl";

import { heroMovie } from "../helpers/mixData";
import Loading from "./Loading";
import { getMovie } from "../services/apiMovie";
import { formatRuntime } from "../helpers/formatCurrency";

const TMDB_IMAGE_HERO_URL = "https://image.tmdb.org/t/p/original";
const TMDB_IMAGE_HERO_LESS_URL = "https://image.tmdb.org/t/p/w500";

function HeroMovie({ movieMedia }) {
  console.log(movieMedia);

  const [movie, setMovie] = useState({});

  async function convertMovie(movieData) {
    const data = await heroMovie(movieData);
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      if (!movieMedia) return;
      const movieData = await getMovie(movieMedia);
      console.log(movieData);

      const data = await convertMovie(movieData);
      setMovie(data);
    }

    fetchData();
  }, [movieMedia]);

  const formatedDuration = movie?.duration
    ? formatRuntime(movie?.duration)
    : "";

  console.log(movie);

  return (
    <div className="grid grid-cols-[.6fr_1fr] bg-black">
      {/* Backdrop */}
      <div className="fadeIn relative order-2">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(90deg,#000_0%,transparent_50%,transparent)]"></div>
        <div className="max-h-[40rem] min-h-[16rem] md:min-h-[24rem] lg:min-h-[32rem] xl:min-h-[40rem]">
          {movie && (
            <img
              src={TMDB_IMAGE_HERO_URL + movie.backdrop}
              className="block max-h-[40rem] min-h-[16rem] w-full object-cover md:min-h-[24rem] lg:min-h-[32rem] xl:min-h-[40rem]"
            />
          )}
        </div>
      </div>

      {/* Panel */}
      <div className="order-1 px-14 text-gray-100">
        <div className="flex h-full flex-col justify-center gap-8">
          <Link to={`/movie/${movie.id}`} className="w-fit">
            <h2 className="text-5xl">{movie.title}</h2>
          </Link>
          <div className="flex items-center gap-2 text-gray-400">
            {movie.title && (
              <img src="/star.svg" alt="Star" className="block h-6 w-5" />
            )}
            <p className="block">
              {movie?.rating ? Number(movie.rating).toFixed(1) : undefined}
            </p>
            <p>{movie.year}</p>
            <p>
              {formatedDuration.hours} {formatedDuration.minutes}
            </p>
          </div>
          <p className="hyphens-auto">{movie.description}</p>
          <div>
            {movie.title && (
              <button className="w-fit bg-gray-800 px-8 py-2 font-semibold text-gray-100 transition-colors duration-300 hover:bg-gray-600">
                Watch Trailer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMovie;
