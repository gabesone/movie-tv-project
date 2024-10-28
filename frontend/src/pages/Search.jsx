function Search() {
  const x = "al";
  return (
    <>
      <div className="fixed h-20 w-full bg-slate-500"></div>

      {x.length > 0 && (
        <div>
          <h2>Hello!</h2>
        </div>
      )}
    </>
  );
}

export default Search;
