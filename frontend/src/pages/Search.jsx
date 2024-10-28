function Search({ isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="sticky top-0 z-30 h-20 w-full bg-slate-500">
          {/* <input type="text" /> */}
        </div>
      )}
    </>
  );
}

export default Search;
