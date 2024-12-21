{
  /* Hero on 1024px or greater */
}
{
  matchWidth === true && (
    <>
      <Suspense fallback={<Loading />}>
        {/* Render when matchWidth is equal or greater then 1024px */}
        <div className="relative lg:pb-[40%]">
          <div
            className="fadeIn"
            style={{
              backgroundImage: `linear-gradient(90deg, #000 0, transparent 50%, transparent),url(${TMDB_IMAGE_HERO_URL}${backdrop})`,
              position: "absolute",
              right: "0",
              top: "0",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "71.1%",
            }}
          ></div>

          {/* Movie or Tv Show details */}
          <div
            className="absolute bottom-0 left-0 top-0 z-10 flex h-full w-[45%] flex-col justify-center gap-6 p-14"
            hidden
          >
            {/* Title of Movie or Tv */}
            {mediaType ? (
              <Link to={`/${mediaType}/${id}`} className="w-fit">
                <h2 className="text-4xl font-semibold">{title}</h2>
              </Link>
            ) : (
              <h2 className="text-4xl font-semibold">{title}</h2>
            )}

            {/* Minor information */}
            <div className="flex gap-2 text-gray-400">
              <p className="">Rating {rating}</p>
              <p>{year}</p>
            </div>

            {/* Description */}
            <div className="font-medium">{description}</div>
            <div className="">
              <button className="flex items-center gap-2 bg-gray-800 px-6 py-2 font-semibold transition-colors duration-300 hover:bg-gray-700">
                <SlControlPlay />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}
