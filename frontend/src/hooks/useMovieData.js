import { useQuery } from "@tanstack/react-query";

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/apiMovie";

export function useMovieData() {
  // Fetching PopularMovies, TopRatedMovies, UpcomingMovies
  // and NowPlayingMovies from services API folder

  const popularMoviesQuery = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const topRatedMoviesQuery = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const upcomingMoviesQuery = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: getUpcomingMovies,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const nowPlayingMoviesQuery = useQuery({
    queryKey: ["nowPlayingMovies"],
    queryFn: getNowPlayingMovies,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
    nowPlayingMoviesQuery,
  };
}
