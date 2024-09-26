import { useParams } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { PosterMovieLink, PosterTvLink } from "../components/Images";

const URL_API = "https://api.themoviedb.org/3/discover/movie";
const API_KEY2 = "103e37f7523217a4747a42c3c5fc6d74";

async function testFetch(mediaId, page) {
  const res = await fetch(
    `${URL_API}?api_key=${API_KEY2}&with_genres=${mediaId}&page=${page}`,
  );
  return res.json();
}

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

function Genre() {
  const { mediaType, mediaId } = useParams();

  //
  const filteredGenres = movieGenres.genres.find(
    (genre) => genre.id === Number(mediaId),
  )?.name;

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
    gcTime: 1000 * 60,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.page === 500 ? null : pages.length + 1;
    },
  });

  const posters = data ? data.pages.flatMap((poster) => poster.results) : [];

  return (
    <div className="mt-16 px-4 text-gray-100 md:px-8 lg:px-12">
      <h2 className="text-xl font-medium capitalize text-gray-100 sm:text-2xl">
        {mediaType} genre: {filteredGenres}
      </h2>
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load More
        </button>

        {mediaType === "movie" && (
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-7">
            {posters.map((poster) => (
              <PosterMovieLink
                key={poster.id}
                posterId={poster.id}
                posterName={poster.title}
                posterPath={poster.poster_path}
                posterRating={poster.vote_average}
              />
            ))}
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Genre;
