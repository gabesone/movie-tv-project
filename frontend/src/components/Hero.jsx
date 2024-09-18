import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlControlPlay } from "react-icons/sl";

import { mixHeroData } from "../helpers/mixData";
import Loading from "./Loading";

const TMDB_IMAGE_HERO_URL = "https://image.tmdb.org/t/p/original";
const TMDB_IMAGE_HERO_LESS_URL = "https://image.tmdb.org/t/p/w500";

function Hero({ media, mediaType }) {
  const [matchWidth, setMatchWidth] = useState(null);
  const { id, backdrop, description, title, rating, year } = mixHeroData(media);

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
      {/* Hero on 1024px or greater */}
      {matchWidth === true && (
        <>
          {/* Render when matchWidth is equal or greater then 1024px */}
          <div className="fadeIn relative h-full pb-[50%] lg:pb-[40%]">
            <div
              style={{
                backgroundImage: `linear-gradient(90deg, #000 0, transparent 50%, transparent),url(${TMDB_IMAGE_HERO_URL}${backdrop})`,
                position: "absolute",
                right: "0",
                top: "0",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "71.1%",
              }}
            ></div>

            {/* Movie or Tv Show details */}
            <div
              className="absolute bottom-0 left-0 top-0 z-10 flex h-full w-[45%] flex-col justify-center gap-6 p-16"
              hidden
            >
              {/* Title of Movie or Tv */}
              {mediaType ? (
                <Link to={`/${mediaType}/${id}`} className="w-fit">
                  <h2 className="text-4xl font-semibold">{title}</h2>
                </Link>
              ) : (
                <h2 className="text-4xl font-semibold">{title}</h2>
              )}

              {/* Minor information */}
              <div className="flex gap-2">
                <p className="">Rating {rating}</p>
                <p>{year}</p>
              </div>

              {/* Description */}
              <div className="font-medium">{description}</div>
              <div className="">
                <button className="flex items-center gap-2 bg-gray-800 px-6 py-2 font-semibold transition-colors duration-300 hover:bg-gray-700">
                  <SlControlPlay />
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Hero on less then 1024px */}
      {matchWidth === false && (
        <>
          {/* Render when matchWidth is less then 1024px */}
          <div className="fadeIn relative h-full pb-[45%]">
            <div
              className="bg-center"
              style={{
                backgroundImage: `linear-gradient(0deg, #000 0, transparent 50%, transparent),url(${TMDB_IMAGE_HERO_URL}${backdrop})`,
                position: "absolute",
                right: "0",
                top: "0",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
              }}
            >
              {/* Play icon */}
              <div className="flex h-full flex-col items-center justify-center text-4xl font-extrabold md:text-5xl">
                <SlControlPlay />
              </div>
            </div>
          </div>

          {/* Movie or Tv Show details */}
          <div className="flex flex-col space-y-2 px-4 pb-4 md:px-8 md:pb-8">
            {/* Title of Movie or Tv */}
            {mediaType ? (
              <Link to={`/${mediaType}/${id}`} className="w-fit">
                <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl">
                  {title}
                </h2>
              </Link>
            ) : (
              <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}

            {/* Minor information */}
            <div className="flex gap-2 text-sm text-gray-400">
              <p className="">Rating {rating}</p>
              <p>{year}</p>
            </div>

            {/* Description */}
            <div className="hidden font-medium md:block">{description}</div>
            <div className="hidden lg:block">button</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
