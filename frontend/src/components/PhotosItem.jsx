import { Backdrop, Poster } from "./Images";

function PhotosItem({ images }) {
  return (
    <div className="mx-4 my-8 w-full space-y-16 text-gray-100 xl:ml-16">
      {/* Backdrops */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-2">
          <h2 className="text-2xl font-medium">Backdrops</h2>
          <p className="text-sm font-medium text-gray-500">
            {images.backdrops.length} Images
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-6">
          {images.backdrops.map((backdrop) => (
            <Backdrop
              key={backdrop.file_path}
              backdropPath={backdrop.file_path}
            />
          ))}
        </div>
      </div>

      {/* Posters */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-2">
          <h2 className="text-2xl font-medium">Posters</h2>
          <p className="text-sm font-medium text-gray-500">
            {images.posters.length} Images
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-7">
          {images.posters.map((poster) => (
            <Poster key={poster.file_path} posterPath={poster.file_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotosItem;
