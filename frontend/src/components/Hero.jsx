import { Link, useParams } from "react-router-dom";

import { mixData } from "../helpers/mixData";

const TMDB_IMAGE_HERO_URL = "https://image.tmdb.org/t/p/original";

function Hero({ media, mediaType }) {
  const { id, backdrop, description, title, rating, year } = mixData(media);

  const { pathnameType } = useParams();

  return (
    <div className="bg-black text-white">
      <div className="fadeIn relative h-full pb-[40%]">
        {/* Backdrop */}
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
          className="fadeIn"
        >
          backdrop
        </div>
        {/* Movie or TV Show details */}
        <div className="absolute bottom-0 left-0 top-0 z-10 flex h-full w-[45%] flex-col justify-center gap-6 p-16">
          {/* Title */}
          {mediaType ? (
            <Link to={`/${mediaType}/${id}`} className="w-fit">
              <h2 className="text-5xl font-semibold">{title}</h2>
            </Link>
          ) : (
            <h2 className="text-5xl font-semibold">{title}</h2>
          )}
          <div className="flex gap-2">
            <p>Rating {rating}</p>
            <p>{year}</p>
          </div>
          {/* Description */}
          <div className="font-medium">{description}</div>
          <div className="">button</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
