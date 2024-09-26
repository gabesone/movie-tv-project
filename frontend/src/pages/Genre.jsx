import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

const URL_API = "https://api.themoviedb.org/3/discover/movie";
const API_KEY2 = "";

async function testFetch(mediaId, page) {
  const res = await fetch(
    `${URL_API}?api_key=${API_KEY2}&with_genres=${mediaId}&page=${page.pageParam}`,
  );
  return res.json();
}

function Genre() {
  const { mediaType, mediaId } = useParams();

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
    queryFn: (page) => testFetch(mediaId, page),
    initialPageParam: 4,
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage, pages);
    },
  });

  if (isFetching) {
    return <p className="text-gray-100">loading...</p>;
  }

  console.log(data);

  return (
    <div className="mt-16 px-4 md:px-8 lg:px-12">
      <h2 className="text-xl font-medium capitalize text-gray-100 sm:text-2xl">
        {mediaType} genre: X
      </h2>
      <div></div>
    </div>
  );
}

export default Genre;
