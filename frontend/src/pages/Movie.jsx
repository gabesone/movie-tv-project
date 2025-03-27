import CarouselMovie from "../components/CarouselMovie";
import { useMovieData } from "../hooks/useMovieData";
import TextLink from "../components/TextLink";
import { randomMovieHero } from "../helpers/mixRandom";
import CarouselPlaceholder from "../components/CarouselPlaceholder";
import HeroMovie from "../components/HeroMovie";
import Loading from "../components/Loading";

export const arrPlaceholder = Array.from({ length: 20 }, () => {
  const img = document.createElement("img");
  img.src = "/placeholder-img-370x556.webp";
  img.alt = "Placeholder";
  return img;
});

function Movie() {
  const {
    nowPlayingMoviesQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  } = useMovieData();

  var heroMovie;

  if (
    !nowPlayingMoviesQuery.isPending &&
    !popularMoviesQuery.isPending &&
    !topRatedMoviesQuery.isPending &&
    !upcomingMoviesQuery.isPending
  ) {
    heroMovie = randomMovieHero(
      popularMoviesQuery.data,
      topRatedMoviesQuery.data,
      upcomingMoviesQuery.data,
      nowPlayingMoviesQuery.data,
    );
  }

  return (
    <div>
      {nowPlayingMoviesQuery.isPending ||
      popularMoviesQuery.isPending ||
      topRatedMoviesQuery.isPending ||
      upcomingMoviesQuery.isPending ? (
        <HeroMovie />
      ) : (
        <HeroMovie movieMedia={heroMovie.id} />
      )}

      <div className="mt-8 space-y-4 sm:mt-16 sm:space-y-8">
        {/* Popular movies */}
        <div>
          <TextLink pathname="/movie/category/popular">Popular Movies</TextLink>
          {popularMoviesQuery.isPending ? (
            <CarouselPlaceholder ArrPlaceholder={arrPlaceholder} />
          ) : (
            <CarouselMovie mediaData={popularMoviesQuery.data} />
          )}
        </div>

        {/* Top rated movies */}
        <div>
          <TextLink pathname="/movie/category/top_rated">
            Top rated movies
          </TextLink>
          {topRatedMoviesQuery.isPending ? (
            <CarouselPlaceholder ArrPlaceholder={arrPlaceholder} />
          ) : (
            <CarouselMovie mediaData={topRatedMoviesQuery.data} />
          )}
        </div>

        {/* Upcoming movies */}
        <div>
          <TextLink pathname="/movie/category/upcoming">
            Upcoming movies
          </TextLink>
          {topRatedMoviesQuery.isPending ? (
            <CarouselPlaceholder ArrPlaceholder={arrPlaceholder} />
          ) : (
            <CarouselMovie mediaData={upcomingMoviesQuery.data} />
          )}
        </div>

        {/* Now playing movies */}
        <div>
          <TextLink pathname="/movie/category/now_playing">
            now playing movies
          </TextLink>
          {topRatedMoviesQuery.isPending ? (
            <CarouselPlaceholder ArrPlaceholder={arrPlaceholder} />
          ) : (
            <CarouselMovie mediaData={nowPlayingMoviesQuery.data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Movie;
