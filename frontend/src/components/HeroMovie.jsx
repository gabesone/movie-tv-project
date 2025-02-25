import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlControlPlay } from "react-icons/sl";

import { heroMovie } from "../helpers/mixData";

const TMDB_IMAGE_HERO_URL = "https://image.tmdb.org/t/p/original";
const TMDB_IMAGE_HERO_LESS_URL = "https://image.tmdb.org/t/p/w500";

function HeroMovie({ image }) {
  // const backdrop =
  return (
    <div className="grid grid-cols-[.5fr_1fr] bg-black">
      {/* Backdrop */}
      <div className="fadeIn relative order-2">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(90deg,#000_0%,transparent_50%,transparent)]"></div>
        <div className="max-h-[40rem]">
          <img
            src={`${image ? TMDB_IMAGE_HERO_URL + image.backdrop_path : "/testReplacer.jpg"}`}
            className="block aspect-square max-h-[40rem] min-h-[16rem] w-full object-cover md:min-h-[24rem] lg:min-h-[32rem]"
          />
        </div>
      </div>

      {/* Panel */}
      <div className="order-1 text-white">
        <h2>title</h2>
      </div>
    </div>
  );
}

export default HeroMovie;
