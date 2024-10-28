function Search() {
  const query = "test";
  return (
    <>
      <div className="sticky top-0 flex h-16 w-full items-center bg-[#222]">
        <input
          type="text"
          placeholder="Search for a movie, tv show or person..."
          className="w-full bg-[#222] px-4 font-normal text-gray-100 outline-none md:px-8 lg:px-14"
          autoFocus={true}
        />
      </div>

      {query.length > 0 && (
        <div className="h-[100dvh] text-gray-100">
          <h2>Hello!</h2>
        </div>
      )}
    </>
  );
}

export default Search;
