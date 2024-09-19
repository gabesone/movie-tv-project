import { useQuery } from "@tanstack/react-query";

import {
  getAirTodayTvShows,
  getCurrentlyAirTvShows,
  getPopularTvShows,
  getTopRatedTvShows,
} from "../services/apiTVShow";

export function useTvData() {
  // Fetching PopularTvShows, TopRatedTvShows, CurrentlyAirTvShows
  // and AirTodayTvShows from services API folder

  const popularTvShowsQuery = useQuery({
    queryKey: ["popularTvShows"],
    queryFn: getPopularTvShows,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const topRatedTvShowsQuery = useQuery({
    queryKey: ["topRatedTvShows"],
    queryFn: getTopRatedTvShows,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const currentlyAirTvShowsQuery = useQuery({
    queryKey: ["currentlyAirTvShows"],
    queryFn: getCurrentlyAirTvShows,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const airTodayTvShowsQuery = useQuery({
    queryKey: ["airTodayTvShows"],
    queryFn: getAirTodayTvShows,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    popularTvShowsQuery,
    topRatedTvShowsQuery,
    currentlyAirTvShowsQuery,
    airTodayTvShowsQuery,
  };
}
