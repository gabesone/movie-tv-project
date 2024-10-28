import { useState } from "react";
import { getMulti } from "../services/apiMulti";

function Search() {
  const [query, setQuery] = useState("");
  function searchQuery(e) {
    e.preventDefault();

    if (e.target.value.length > 3) {
      setQuery(e.target.value);
    }
  }

  const data = getMulti(query);
  console.log(data);

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
