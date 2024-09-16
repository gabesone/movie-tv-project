import { useQuery } from "@tanstack/react-query";

import { getTrendingMovies } from "../services/apiMovie";
import { getTrendingTVShows } from "../services/apiTVShow";

export function useTrendingData() {
  // Fetching TrendingMovie and TrendingTvShow API
  const trendingMoviesQuery = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });
  const TrendingTVShowQuery = useQuery({
    queryKey: ["trendingTVShow"],
    queryFn: getTrendingTVShows,
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return { trendingMoviesQuery, TrendingTVShowQuery };
}
