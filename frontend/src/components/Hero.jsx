import { Link } from "react-router-dom";

import { mixData } from "../helpers/mixData";
import Loading from "./Loading";

const TMDB_IMAGE_HERO_URL = "https://image.tmdb.org/t/p/original";

function Hero({ media, mediaType }) {
  const { id, backdrop, description, title, rating, year } = mixData(media);

  if (!media) return <Loading />;

  return (
    <div className="bg-black text-white">
      <div className="fadeIn relative h-full pb-[50%] lg:pb-[40%]">
        {/* Backdrop */}
        {/* TODO: Add conditional rendering componenent based on breakpoint view */}
        <div
          className="hidden"
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
        >
          backdrop
        </div>
        <div
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
          <div className="flex h-full flex-col items-center justify-center text-2xl font-medium text-black">
            Play Icon
          </div>
        </div>
        {/* Movie or TV Show details */}
        {/* ---------------------------------- */}
        {/* TODO: Add back movie or tv show details to breakpoint lg:1024px */}
      </div>
      <div className="flex flex-col space-y-2 p-4 text-white">
        {/* Title */}
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
        <div className="flex gap-2 text-sm text-gray-400">
          <p className="">Rating {rating}</p>

          <p>{year}</p>
        </div>
        {/* Description */}
        <div className="hidden font-medium md:block">{description}</div>
        <div className="hidden lg:block">button</div>
      </div>
    </div>
  );
}

export default Hero;
