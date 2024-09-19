import Carousel from "../components/CarouselMovie";
import { useMovieData } from "../hooks/useMovieData";
import Loading from "../components/Loading";
import TextLink from "../components/TextLink";
import { randomMovieHero } from "../helpers/mixRandom";
import Hero from "../components/Hero";

function Movie() {
  const {
    nowPlayingMoviesQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  } = useMovieData();

  if (
    nowPlayingMoviesQuery.isPending ||
    popularMoviesQuery.isPending ||
    topRatedMoviesQuery.isPending ||
    upcomingMoviesQuery.isPending
  )
    return <Loading />;

  const heroMovie = randomMovieHero(
    popularMoviesQuery.data,
    topRatedMoviesQuery.data,
    upcomingMoviesQuery.data,
    nowPlayingMoviesQuery.data,
  );

  return (
    <div>
      <Hero media={heroMovie} mediaType="movie" />

      <div className="mt-8 space-y-4 sm:mt-16 sm:space-y-8">
        {/* Popular movies */}
        <div>
          <TextLink pathname="/movie/category/popular">Popular Movies</TextLink>
          <Carousel mediaData={popularMoviesQuery.data} />
        </div>

        {/* Top rated movies */}
        <div>
          <TextLink pathname="/movie/category/top_rated">
            Top rated movies
          </TextLink>
          <Carousel mediaData={topRatedMoviesQuery.data} />
        </div>

        {/* Upcoming movies */}
        <div>
          <TextLink pathname="/movie/category/upcoming">
            Upcoming movies
          </TextLink>
          <Carousel mediaData={upcomingMoviesQuery.data} />
        </div>

        {/* Now playing movies */}
        <div>
          <TextLink pathname="/movie/category/now_playing">
            now playing movies
          </TextLink>
          <Carousel mediaData={nowPlayingMoviesQuery.data} />
        </div>
      </div>
    </div>
  );
}

export default Movie;
