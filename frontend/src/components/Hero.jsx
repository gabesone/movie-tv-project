import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlControlPlay } from "react-icons/sl";

import { heroMovie, mixHeroData } from "../helpers/mixData";
import Loading from "./Loading";

const TMDB_IMAGE_HERO_URL = "https://image.tmdb.org/t/p/original";
const TMDB_IMAGE_HERO_LESS_URL = "https://image.tmdb.org/t/p/w500";

function Hero({ media, mediaType }) {
  const [matchWidth, setMatchWidth] = useState(null);
  // const { id, backdrop, description, title, rating, year } = mixHeroData(media);

  const { movieData } = heroMovie(media);
  console.log(movieData);

  // Look at window.matchMedia
  const matchMedia = window.matchMedia("(min-width: 1024px)");

  // Set the matchWidth to true or false at first rendering
  useEffect(
    function () {
      function seeWidth() {
        setMatchWidth(matchMedia.matches);
      }
      seeWidth();
    },
    [matchMedia.matches],
  );

  // When the size of window change set the matchWidth to true or false,
  // true is min-width is equal or greater then 1024px and false otherwise
  matchMedia.onchange = (e) => {
    setMatchWidth(e.matches);
  };

  if (!media) return <Loading />;

  return (
    <div className="bg-black text-gray-100">
      {/* Hero on less then 1024px */}
      {matchWidth === false && (
        <>
          {/* Render when matchWidth is less then 1024px */}
          <div className="fadeIn relative min-h-80">
            <div
              className="bg-center"
              style={{
                backgroundImage: `linear-gradient(0deg, #000 0, transparent 50%, transparent),url(${TMDB_IMAGE_HERO_URL}${movieData.backdrop})`,
                position: "absolute",
                right: "0",
                top: "0",
                bottom: "0",
                left: "0",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
              }}
            >
              {/* Play icon */}
              <div className="flex h-full flex-col items-center justify-center text-4xl md:text-5xl">
                <SlControlPlay />
              </div>
            </div>
          </div>

          {/* Movie or Tv Show details */}
          <div className="fadeIn flex flex-col space-y-2 px-4 pb-4 md:px-8 md:pb-8">
            {/* Title of Movie or Tv */}
            {mediaType ? (
              <Link to={`/${mediaType}/${movieData.id}`} className="w-fit">
                <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl">
                  {movieData.title}
                </h2>
              </Link>
            ) : (
              <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl">
                {movieData.title}
              </h2>
            )}

            {/* Minor information */}
            <div className="flex gap-2 text-sm text-gray-400">
              <p className="">Rating {movieData.rating}</p>
              <p>{movieData.year}</p>
            </div>

            {/* Description */}
            <div className="hidden font-medium md:block">
              {movieData.description}
            </div>
            <div className="hidden lg:block">button</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
