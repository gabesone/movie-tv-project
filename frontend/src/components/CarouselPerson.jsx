import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { useEffect, useState } from "react";

import { PosterPersonLink } from "./Images";

function CarouselPerson({ creditsData }) {
  const [isNav, setIsNav] = useState(true);
  const [isFreeMode, setIsFreeMode] = useState(true);

  // Change the behavior of slides based on width screen
  function setSlidesView() {
    if (window.innerWidth < 768) {
      setIsNav(false);
      setIsFreeMode(true);
    }

    if (window.innerWidth >= 768) {
      setIsNav(true);
      setIsFreeMode(false);
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
      modules={[Navigation, Pagination, FreeMode]}
      spaceBetween={8}
      slidesPerView={3}
      navigation={isNav}
      freeMode={isFreeMode}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1024: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
        1280: {
          slidesPerView: 7,
          slidesPerGroup: 7,
        },
      }}
      className="px-4 text-gray-100 md:px-8 lg:px-14"
    >
      {creditsData?.cast?.map((cast) => (
        <SwiperSlide className="my-2" key={cast.id}>
          <PosterPersonLink
            name={cast.name}
            character={cast.character}
            personId={cast.id}
            posterPath={cast.profile_path}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselPerson;
