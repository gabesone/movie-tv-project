import { mixMovieData } from "../helpers/mixData";
import { OverviewPoster } from "./Images";
import ItemList from "./ItemList";
import { PosterBig } from "./Posters";

function OverviewMovie({ mediaData }) {
  const {
    released,
    runtime,
    director,
    budget,
    revenue,
    genre,
    status,
    language,
    production,
    posterPath,
    title,
  } = mixMovieData(mediaData);

  console.log(production);

  return (
    <div className="mx-4 grid w-full grid-cols-[auto_1fr] text-gray-100 lg:gap-12 xl:mx-16">
      {/* Poster Overview */}
      <div className="hidden lg:block">
        <OverviewPoster posterPath={posterPath} posterName={title} />
      </div>

      {/* Storyline */}
      <div className="col-span-2 flex w-full flex-col lg:col-span-1">
        <h2 className="mb-4 text-2xl font-medium">Storyline</h2>
        <p className="text-wrap text-justify font-medium">
          {mediaData.overview}
        </p>

        {/* Fields */}
        <div className="mt-8 grid grid-cols-[8rem_1fr]">
          <div className="capitalize">
            <ul className="space-y-1">
              <li>released</li>
              <li>runtime</li>
              <li>director</li>
              <li>budget</li>
              <li>renevue</li>
              <li>gene</li>
              <li>status</li>
              <li>language</li>
              <li>production</li>
            </ul>
          </div>

          {/* Fields information */}
          <div>
            <ul className="space-y-1">
              <ItemList>{released}</ItemList>
              <ItemList>{runtime}</ItemList>
              <ItemList isPerson={true} idPerson={director[0].id}>
                {director[0].name}
              </ItemList>
              <ItemList>{budget}</ItemList>
              <ItemList>{revenue}</ItemList>

              <li>
                {genre.map((genreItem) => (
                  <ItemList
                    key={genreItem.id}
                    idGenre={genreItem.id}
                    isGenre={true}
                    pathname="movie"
                  >
                    {genreItem.name}
                  </ItemList>
                ))}
              </li>

              <ItemList>{status}</ItemList>
              <ItemList>{language}</ItemList>

              <div className="flex flex-wrap">
                {production.map((company, index) => (
                  <ItemList key={company.id}>
                    {production.length === index + 1
                      ? company.name
                      : company.name + ","}
                  </ItemList>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewMovie;
