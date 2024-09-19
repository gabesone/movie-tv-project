import Carousel from "../components/CarouselMovie";
import { useTrendingData } from "../hooks/useTrendingData";

function Movie() {
  const { trendingMovieQuery } = useTrendingData();
  return (
    <div>
      <Carousel mediaData={trendingMovieQuery.data} />
    </div>
  );
}

export default Movie;
