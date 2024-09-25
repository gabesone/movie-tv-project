function Loading({ isComplete }) {
  return (
    <div className="h-[690px] w-full bg-black text-white">
      <p>Loading...</p>
      {isComplete ? "Finished" : "loading spineerrr"}
    </div>
  );
}

export default Loading;
