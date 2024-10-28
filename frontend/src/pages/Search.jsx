import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getMulti } from "../services/apiMulti";
import {
  PosterMovieLink,
  PosterMulti,
  PosterTvLink,
} from "../components/Images";
import { filterDuplicates } from "../helpers/filterDuplicates";

function Search() {
  const [query, setQuery] = useState("");
  function searchQuery(e) {
    e.preventDefault();

    setQuery(e.target.value);
  }

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["multi", query],
    queryFn: async ({ signal }) => {
      return getMulti(query, signal);
    },
    enabled: !!query,
    staleTime: 0,
  });

  const multiPosters = data ? data.results.map((multi) => multi) : [];
  const filteredMulti = filterDuplicates(multiPosters);
  console.log(filteredMulti);

  return (
    <>
      <div className="sticky top-0 z-30 flex h-16 w-full items-center bg-[#222] xl:h-20">
        <input
          type="text"
          placeholder="Search for a movie, tv show or person..."
          className="w-full bg-[#222] px-4 font-normal text-gray-100 outline-none md:px-8 lg:px-14"
          autoFocus={true}
          defaultValue={query}
          onChange={searchQuery}
        />
      </div>

      <div className="min-h-[100dvh] px-4 text-gray-100 md:px-8 lg:px-14">
        <h2 className="mb-8 mt-16 text-2xl font-medium">
          Results For: {query}
        </h2>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7">
          {filteredMulti.map((media) => (
            <PosterMulti
              mediaType={media.media_type}
              posterId={media.id}
              movieTitle={media.title ? media.title : ""}
              tvName={media.name ? media.name : ""}
              personName={media.name ? media.name : ""}
              posterPath={media.poster_path}
              posterRating={media.vote_average}
              key={media.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
