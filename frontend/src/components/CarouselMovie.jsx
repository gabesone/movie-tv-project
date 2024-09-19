import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

import { PosterMovieLink } from "./Images";

const TMDB_IMAGE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

function CarouselMovie({ mediaData }) {
  const [slides, setSlides] = useState(null);
  const [groupSlides, setGroupSlides] = useState(null);
  const [nav, setNav] = useState(true);

  // Change the behavior of slides based on width screen
  function setSlidesView() {
    if (window.innerWidth <= 640) {
      setSlides(3);
      setGroupSlides(1);
      setNav(false);
    }

    if (window.innerWidth > 640 && window.innerWidth <= 768) {
      setSlides(4);
      setGroupSlides(1);
      setNav(false);
    }

    if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      setSlides(5);
      setGroupSlides(5);
      setNav(true);
    }

    if (window.innerWidth > 1024 && window.innerWidth <= 1280) {
      setSlides(6);
      setGroupSlides(6);
      setNav(true);
    }

    if (window.innerWidth > 1280) {
      setSlides(7);
      setGroupSlides(7);
      setNav(true);
    }
  }

  useEffect(function () {
    // Initialize the function and set the first states values
    setSlidesView();

    window.addEventListener("resize", setSlidesView);

    return () => {
      window.removeEventListener("resize", setSlidesView);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={8}
      slidesPerView={slides}
      slidesPerGroup={groupSlides}
      navigation={nav}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="px-14 text-gray-100"
    >
      {mediaData?.results?.map((poster) => (
        <SwiperSlide className="my-8 w-52" key={poster.id}>
          <PosterMovieLink
            posterId={poster.id}
            posterName={poster.title ? poster.title : poster.name}
            posterPath={poster.poster_path}
            posterRating={poster.vote_average}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselMovie;
