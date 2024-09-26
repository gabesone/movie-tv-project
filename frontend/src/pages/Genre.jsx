import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

import { PosterMovieLink, PosterTvLink } from "../components/Images";
import TopNav from "../components/TopNav";
import { useCallback, useEffect, useRef, useState } from "react";

const URL_API = "https://api.themoviedb.org/3/discover/movie";
const API_KEY2 = "103e37f7523217a4747a42c3c5fc6d74";

async function testFetch(mediaId, page) {
  const res = await fetch(
    `${URL_API}?api_key=${API_KEY2}&with_genres=${mediaId}&page=${page}`,
  );
  return res.json();
}

// TODO: move the movieGenres objects to another file, it may be apiMovie
// since it's a array of movies genres
const movieGenres = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

// Options from Intersection Observer API
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

function Genre() {
  const containerRef = useRef(null);
  const { mediaType, mediaId } = useParams();

  const mediaTypeStr = mediaType === "movie" ? "Movie" : "Tv";

  const filteredGenres = movieGenres.genres.find(
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
    queryFn: ({ pageParam }) => testFetch(mediaId, pageParam),
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

  return (
    <>
      <TopNav>
        {mediaTypeStr} Genre: {filteredGenres}
      </TopNav>

      <div className="mt-8 px-4 text-gray-100 md:px-8 lg:px-12 xl:mt-16">
        <h2 className="pb-2 text-xl font-medium capitalize text-gray-100 sm:pb-4 sm:text-2xl">
          {mediaType} Genre: {filteredGenres}
        </h2>

        <div>
          {mediaType === "movie" && (
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7">
              {posters.map((poster) => (
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
          )}

          {mediaType === "tv" && (
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-7">
              {posters.map((poster) => (
                <PosterTvLink
                  key={poster.id}
                  posterId={poster.id}
                  posterName={poster.name}
                  posterPath={poster.poster_path}
                  posterRating={poster.vote_average}
                />
              ))}
              {/* Hidden element to call fetchNextPage when the viewport hit this div */}
              <div ref={containerRef}></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Genre;
