import CarouselPlaceholder from "../components/CarouselPlaceholder";
import CarouselTv from "../components/CarouselTv";
import Hero from "../components/Hero";
import { PosterTvLink } from "../components/Images";
import Loading from "../components/Loading";
import TextLink from "../components/TextLink";
import { randomTvHero } from "../helpers/mixRandom";
import { useTvData } from "../hooks/useTvData";
import { arrPlaceholder } from "./Movie";

function TvShow() {
  const {
    airTodayTvShowsQuery,
    currentlyAirTvShowsQuery,
    popularTvShowsQuery,
    topRatedTvShowsQuery,
  } = useTvData();

  // if (
  //   airTodayTvShowsQuery.isPending ||
  //   currentlyAirTvShowsQuery.isPending ||
  //   popularTvShowsQuery.isPending ||
  //   topRatedTvShowsQuery.isPending
  // )
  //   return <Loading />;

  // const heroTvShow = randomTvHero(
  //   popularTvShowsQuery.data,
  //   topRatedTvShowsQuery.data,
  //   currentlyAirTvShowsQuery.data,
  //   airTodayTvShowsQuery.data,
  // );
  console.log(airTodayTvShowsQuery);

  return (
    <div>
      {/* <Hero media={heroTvShow} mediaType="tv" /> */}

      <div className="mt-8 space-y-4 sm:mt-16 sm:space-y-8">
        {/* Popular tv shows */}
        <div>
          <TextLink pathname="/tv/category/popular">popular tv shows</TextLink>
          {/* {popularTvShowsQuery.isPending && (
            <CarouselPlaceholder ArrPlaceholder={arrPlaceholder} />
          )} */}
          <CarouselTv mediaData={popularTvShowsQuery.data} />
        </div>

        {/* Top rated tv shows */}
        <div>
          <TextLink pathname="/tv/category/top_rated">
            top rated tv shows
          </TextLink>
          {/* {topRatedTvShowsQuery.isPending && (
            <CarouselPlaceholder ArrPlaceholder={arrPlaceholder} />
          )} */}
          <CarouselTv mediaData={topRatedTvShowsQuery.data} />
        </div>

        {/* Currently airing tv shows */}
        <div>
          <TextLink pathname="/tv/category/on_the_air">
            currently airing tv shows
          </TextLink>
          {/* {currentlyAirTvShowsQuery.isPending && (
            <CarouselPlaceholder ArrPlaceholder={arrPlaceholder} />
          )} */}
          <CarouselTv mediaData={currentlyAirTvShowsQuery.data} />
        </div>

        {/* Tv shows airing today*/}
        <div>
          <TextLink pathname="/tv/category/airing_today">
            tv shows airing today
          </TextLink>
          {/* {airTodayTvShowsQuery.isPending && (
            <CarouselPlaceholder ArrPlaceholder={arrPlaceholder} />
          )} */}

          <CarouselTv>
            {/* <PosterTvLink poster={airTodayTvShowsQuery.data} /> */}
          </CarouselTv>
        </div>
      </div>
    </div>
  );
}

export default TvShow;
