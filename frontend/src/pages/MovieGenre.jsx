import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef } from "react";

import { PosterMovieLink } from "../components/Images";
import TopNav from "../components/TopNav";
import { getMoviesGenres, movieGenres } from "../services/apiMovie";
import { filterDuplicates } from "../helpers/filterDuplicates";

// Options from Intersection Observer API
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

function Genre() {
  const containerRef = useRef(null);
  const { mediaId } = useParams();

  const filteredMovieGenres = movieGenres.genres.find(
    (genre) => genre.id === Number(mediaId),
  )?.name;

  // TODO: move the useInfiniteQuery to a custom hook
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["testFetch"],
    queryFn: ({ pageParam }) => getMoviesGenres(mediaId, pageParam),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.page === 500 ? null : pages.length + 1;
    },
  });

  // observerFunc, check through observe API when the viewport of
  // the user hit the HTML div element, when it's true entry.isIntersecting
  // it's set to true, then call fetchNextPage
  const observerFunc = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) fetchNextPage();
    },
    [fetchNextPage],
  );

  const posters = data ? data.pages.flatMap((poster) => poster.results) : [];

  // Filtered movies or tv shows posters
  const filteredPosters = filterDuplicates(posters);

  useEffect(
    function () {
      // initialize observer API
      const observer = new IntersectionObserver(observerFunc, options);

      // check if containerRef.current has a value, if it's true
      // observe watch when user hit's that value on viewport
      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        // unmount the observe
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    },
    [observerFunc],
  );

  // If some error on fetching data
  if (error)
    return (
      <div className="mt-8 px-4 text-center text-xl font-medium text-gray-100">
        {error.message}
      </div>
    );

  return (
    <>
      <TopNav>Movie Genre: {filteredMovieGenres}</TopNav>

      <div className="mt-8 px-4 text-gray-100 md:px-8 lg:px-12 xl:mt-16">
        <h2 className="pb-2 text-xl font-medium capitalize text-gray-100 sm:pb-4 sm:text-2xl">
          Movie Genre: {filteredMovieGenres}
        </h2>

        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7">
          {filteredPosters.map((poster) => (
            <PosterMovieLink
              key={poster.id}
              posterId={poster.id}
              posterName={poster.title}
              posterPath={poster.poster_path}
              posterRating={poster.vote_average}
            />
          ))}

          {/* Hidden element to call fetchNextPage when the viewport hit this div */}
          <div ref={containerRef}></div>
        </div>

        {(isFetching || isFetchingNextPage) && (
          <div className="loader mx-auto my-4"></div>
        )}
      </div>
    </>
  );
}

export default Genre;
