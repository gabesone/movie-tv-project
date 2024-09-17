import ItemList from "./ItemList";
import { mixTvShowData } from "../helpers/mixData";
import { PosterBig } from "./Posters";

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

  console.log(creator);

  console.log(startDate);

  return (
    <div className="ml-16 grid grid-cols-[20rem_1fr] gap-12 text-gray-100">
      <PosterBig posterPath={posterPath} posterName={title} />
      <div className="flex flex-col">
        <h2 className="mb-4 text-2xl font-medium">Storyline</h2>
        <p className="font-medium">{mediaData.overview}</p>

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

          <div>
            <ul className="space-y-1">
              <ItemList>{startDate}</ItemList>
              <ItemList>{finishDate}</ItemList>

              <div>
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

              <li>
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

              <div className="flex">
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
