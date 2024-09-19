import { useQuery } from "@tanstack/react-query";

import { getTrendingMovies } from "../services/apiMovie";
import { getTrendingTVShows } from "../services/apiTVShow";

export function useTrendingData() {
  // Fetching TrendingMovies and TrendingTvShows from services API folder

  const trendingMovieQuery = useQuery({
    queryKey: ["trendingMovie"],
    queryFn: getTrendingMovies,
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });
  const trendingTvShowQuery = useQuery({
    queryKey: ["trendingTvShow"],
    queryFn: getTrendingTVShows,
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return { trendingMovieQuery, trendingTvShowQuery };
}
