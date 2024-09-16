import { createContext, useContext } from "react";
import useTrendingData from "../hooks/useTrendingData";

const TrendingContext = createContext();

function TrendingProvider() {
  const { trendingMoviesQuery, TrendingTVShowQuery } = useTrendingData();

  return <TrendingContext.Provider></TrendingContext.Provider>;
}

function useTrending() {
  const context = useContext(TrendingContext);
  if (context === undefined)
    throw new Error(
      "TrendingContext (useTrending()) was used outside of TrendingProvider",
    );

  return context;
}

export { TrendingProvider, useTrending };
