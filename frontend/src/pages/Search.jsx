import { useState } from "react";
import { getMulti } from "../services/apiMulti";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";

function Search() {
  const [query, setQuery] = useState("");
  function searchQuery(e) {
    e.preventDefault();

    setQuery(e.target.value);
  }

  const multiQuery = useQuery({
    queryKey: ["multi", query],
    queryFn: async ({ signal }) => {
      return getMulti(query, signal);
    },
    enabled: !!query,
    staleTime: 0,
  });
  console.log(multiQuery);

  return (
    <>
      <div className="sticky top-0 flex h-16 w-full items-center bg-[#222]">
        <input
          type="text"
          placeholder="Search for a movie, tv show or person..."
          className="w-full bg-[#222] px-4 font-normal text-gray-100 outline-none md:px-8 lg:px-14"
          autoFocus={true}
          defaultValue={query}
          onChange={searchQuery}
        />
      </div>

      {query.length > 0 && (
        <div className="h-[100dvh] text-gray-100">
          <h2>{query}</h2>
        </div>
      )}
    </>
  );
}

export default Search;
