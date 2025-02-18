import { SlLink } from "react-icons/sl";

import ItemList from "./ItemList";
import { mixTvShowData } from "../helpers/mixData";
import { OverviewPoster } from "./Images";
import CarouselPerson from "./CarouselPerson";
import { stringDate } from "../helpers/discoverAge";
import ListDetails from "./ListDetails";
import External from "./External";

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
    <>
      <div className="grid grid-cols-[auto_1fr] px-4 text-gray-100 md:px-8 lg:gap-14 xl:px-14">
        {/* Poster Overview */}
        <div className="hidden lg:block">
          <OverviewPoster posterPath={posterPath} posterName={title} />
        </div>

        {/* Storyline */}
        <div className="flex flex-col">
          <h2 className="mb-4 text-2xl">Storyline</h2>
          <p className="mb-8">{mediaData.overview}</p>

          {/* Fields */}
          <div className="text-sm capitalize md:text-base">
            <ul>
              {startDate && (
                <ListDetails>
                  <div>first aired</div>
                  <ItemList>{stringDate(startDate)}</ItemList>
                </ListDetails>
              )}

              {finishDate && (
                <ListDetails>
                  <div>last aired</div>
                  <ItemList>{stringDate(finishDate)}</ItemList>
                </ListDetails>
              )}

              {creator.length > 0 && (
                <ListDetails>
                  <div>creator</div>
                  <div className="flex flex-wrap gap-x-4">
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
                </ListDetails>
              )}

              {genre && (
                <ListDetails>
                  <div>genre</div>
                  <div className="flex flex-wrap gap-x-4">
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
                  </div>
                </ListDetails>
              )}

              {seasons && (
                <ListDetails>
                  <div>seasons</div>
                  <ItemList>{seasons}</ItemList>
                </ListDetails>
              )}

              {episodes && (
                <ListDetails>
                  <div>episodes</div>
                  <ItemList>{episodes}</ItemList>
                </ListDetails>
              )}

              {status && (
                <ListDetails>
                  <div>status</div>
                  <ItemList>{status}</ItemList>
                </ListDetails>
              )}

              {language && (
                <ListDetails>
                  <div>language</div>
                  <ItemList>{language}</ItemList>
                </ListDetails>
              )}

              {network && (
                <ListDetails>
                  <div>network</div>
                  <div className="flex flex-wrap gap-x-4">
                    {network.map((company, index) => (
                      <ItemList key={company.id}>
                        {network.length === index + 1
                          ? company.name
                          : company.name + ","}
                      </ItemList>
                    ))}
                  </div>
                </ListDetails>
              )}
            </ul>
          </div>

          {/* TV Show externals links */}
          <div className="mt-8">
            <ul className="flex w-fit gap-4 px-2">
              {mediaData.homepage && (
                <External link={mediaData.homepage} name={mediaData.title}>
                  <SlLink />
                </External>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Cast */}
      <div className="mt-8 sm:mt-16">
        <h2 className="mb-2 px-4 text-xl font-medium text-gray-100 sm:mb-4 sm:text-2xl md:px-8 lg:px-14">
          Cast
        </h2>
        <CarouselPerson creditsData={mediaData.credits} />
      </div>
    </>
  );
}

export default OverviewTvShow;
