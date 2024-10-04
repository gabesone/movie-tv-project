import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { useEffect, useState } from "react";

import { PosterMovieLink } from "./Images";
import Loading from "./Loading";

function CarouselMovie({ mediaData }) {
  const [slides, setSlides] = useState(7);
  const [groupSlides, setGroupSlides] = useState(7);
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

  if (!mediaData) return <Loading />;

  return (
    <Swiper
      modules={[Navigation, Pagination, FreeMode]}
      spaceBetween={8}
      slidesPerView={slides}
      slidesPerGroup={groupSlides}
      navigation={nav}
      // TODO: add freeMode behavior and breakpoints
      // freeMode
      // breakpoints={}
      className="px-4 text-gray-100 md:px-8 lg:px-14"
    >
      {mediaData?.results?.map((poster) => (
        <SwiperSlide className="my-2" key={poster.id}>
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
