import { SlLink } from "react-icons/sl";

import { mixMovieData } from "../helpers/mixData";
import CarouselPerson from "./CarouselPerson";
import { OverviewPoster } from "./Images";
import ItemList from "./ItemList";
import External from "./External";
import { formatCurrency } from "../helpers/formatCurrency";
import { stringDate } from "../helpers/discoverAge";

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

  return (
    <>
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
          {/* TODO: Fix issue with flex flex-wrap, when a list grows much */}
          <div className="mt-8 grid grid-cols-[8rem_1fr]">
            <div className="capitalize">
              <ul className="space-y-1">
                <li>released</li>
                <li>{runtime ? "runtime" : ""}</li>
                <li>{director ? "director" : ""}</li>
                <li>budget</li>
                <li>renevue</li>
                <li>genre </li>
                <li>status</li>
                <li>language</li>
                <li>{production ? "production" : ""}</li>
              </ul>
            </div>

            {/* Fields information */}
            <div>
              <ul className="space-y-1">
                <ItemList>{stringDate(released)}</ItemList>
                <ItemList>{runtime ? runtime : ""}</ItemList>
                <ItemList isPerson={true} idPerson={director[0].id}>
                  {director[0].name}
                </ItemList>
                <ItemList>{formatCurrency(budget)}</ItemList>
                <ItemList>{formatCurrency(revenue)}</ItemList>

                <li className="flex flex-wrap">
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
