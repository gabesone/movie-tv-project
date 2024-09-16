function Loading({ isComplete }) {
  return (
    <div className="absolute z-40 text-white">
      {isComplete ? "Finished" : "loading spineerrr"}
    </div>
  );
}

export default Loading;
