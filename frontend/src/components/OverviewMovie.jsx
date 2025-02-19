import { SlLink } from "react-icons/sl";

import { mixMovieData } from "../helpers/mixData";
import CarouselPerson from "./CarouselPerson";
import { OverviewPoster } from "./Images";
import ItemList from "./ItemList";
import External from "./External";
import { formatCurrency, formatRuntime } from "../helpers/formatCurrency";
import { stringDate } from "../helpers/discoverAge";
import ListDetails from "./ListDetails";

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

  const running_time = formatRuntime(runtime);

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
              <ListDetails>
                <div>{released ? "released" : undefined}</div>
                <div>{stringDate(released)}</div>
              </ListDetails>

              <ListDetails>
                <div>{runtime ? "runtime" : undefined}</div>
                <div>
                  {runtime
                    ? `${running_time.hours} ${running_time.minutes}`
                    : undefined}
                </div>
              </ListDetails>

              <ListDetails>
                <div>{director ? "director" : undefined}</div>
                <div>
                  <ItemList isPerson={true} idPerson={director[0].id}>
                    {director[0].name}
                  </ItemList>
                </div>
              </ListDetails>

              {budget && (
                <ListDetails>
                  <div>budget </div>
                  <div>{formatCurrency(budget)}</div>
                </ListDetails>
              )}

              {revenue && (
                <ListDetails>
                  <div>revenue</div>
                  <div>{formatCurrency(revenue)}</div>
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
                        pathname="movie"
                      >
                        {genreItem.name}
                      </ItemList>
                    ))}
                  </div>
                </ListDetails>
              )}
              {status && (
                <ListDetails>
                  <div>status</div>
                  <div>{status}</div>
                </ListDetails>
              )}

              {language && (
                <ListDetails>
                  <div>language</div>
                  <div>{language}</div>
                </ListDetails>
              )}

              {production && (
                <ListDetails>
                  <div>production</div>
                  <div className="flex flex-wrap hyphens-auto">
                    {production.map((company, index) => (
                      <ItemList key={company.id}>
                        {production.length === index + 1
                          ? company.name
                          : company.name + ","}
                      </ItemList>
                    ))}
                  </div>
                </ListDetails>
              )}
            </ul>
          </div>

          {/* Movie externals links */}
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

export default OverviewMovie;
