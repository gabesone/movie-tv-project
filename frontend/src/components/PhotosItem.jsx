import { Backdrop, Poster } from "./Images";

function PhotosItem({ images }) {
  const { backdrops, posters, profiles } = images;

  return (
    <div className="my-8 w-full space-y-16 px-4 text-gray-100 md:px-8 xl:px-14">
      {/* Backdrops */}
      {backdrops?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-medium">Backdrops</h2>
            <p className="text-sm font-medium text-gray-500">
              {backdrops.length} Images
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {backdrops?.map((backdrop) => (
              <Backdrop
                key={backdrop.file_path}
                backdropPath={backdrop.file_path}
              />
            ))}
          </div>
        </div>
      )}

      {/* Posters */}
      {posters?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-medium">Posters</h2>
            <p className="text-sm font-medium text-gray-500">
              {posters.length} Images
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
            {posters?.map((poster) => (
              <Poster key={poster.file_path} posterPath={poster.file_path} />
            ))}
          </div>
        </div>
      )}

      {/* Photos */}
      {profiles?.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-medium">Photos</h2>
            <p className="text-sm font-medium text-gray-500">
              {profiles.length} Images
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
            {profiles?.map((poster) => (
              <Poster key={poster.file_path} posterPath={poster.file_path} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotosItem;
