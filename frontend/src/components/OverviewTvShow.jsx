import ItemList from "./ItemList";
import { mixTvShowData } from "../helpers/mixData";
import { OverviewPoster } from "./Images";

function OverviewTvShow({ mediaData }) {
  const {
    startDate,
    finishDate,
    creator,
    genre,
    seasons,
    episodes,
    status,
    language,
    network,
    posterPath,
    title,
  } = mixTvShowData(mediaData);

  return (
    <div className="grid grid-cols-[auto_1fr] px-4 text-gray-100 md:px-8 lg:gap-14 xl:px-14">
      {/* Poster Overview */}
      <div className="hidden lg:block">
        <OverviewPoster posterPath={posterPath} posterName={title} />
      </div>

      {/* Storyline */}
      <div className="flex flex-col">
        <h2 className="mb-4 text-2xl font-medium">Storyline</h2>
        <p className="font-medium">{mediaData.overview}</p>

        {/* Fields */}
        <div className="mt-8 grid grid-cols-[8rem_1fr]">
          <div className="capitalize">
            <ul className="space-y-1">
              <li>first aired</li>
              <li>last aired</li>
              {creator.length > 0 && <li>creator</li>}
              <li>gene</li>
              <li>seasons</li>
              <li>episodes</li>
              <li>status</li>
              <li>language</li>
              <li>network</li>
            </ul>
          </div>

          {/* Fields information */}
          <div>
            <ul className="space-y-1">
              <ItemList>{startDate}</ItemList>
              <ItemList>{finishDate}</ItemList>

              <div className="flex flex-wrap gap-2">
                {creator?.map((person) => (
                  <ItemList
                    key={person.id}
                    isPerson={true}
                    idPerson={person.id}
                  >
                    {person.name}
                  </ItemList>
                ))}
              </div>

              <li className="flex flex-wrap">
                {genre.map((genreItem) => (
                  <ItemList
                    key={genreItem.id}
                    idGenre={genreItem.id}
                    isGenre={true}
                    pathname="tv"
                  >
                    {genreItem.name}
                  </ItemList>
                ))}
              </li>

              <ItemList>{seasons}</ItemList>
              <ItemList>{episodes}</ItemList>
              <ItemList>{status}</ItemList>
              <ItemList>{language}</ItemList>

              <div className="flex flex-wrap">
                {network.map((company, index) => (
                  <ItemList key={company.id}>
                    {network.length === index + 1
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

export default OverviewTvShow;
