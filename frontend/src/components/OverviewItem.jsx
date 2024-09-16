import { useParams } from "react-router-dom";

import { mixOverviewData } from "../helpers/mixData";
import ItemList from "./ItemList";
import ItemListMap from "./ItemListMap";

function OverviewItem({ mediaData }) {
  const { pathnameType } = useParams();
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
  } = mixOverviewData(mediaData);

  console.log(production);

  return (
    <div className="ml-16 grid grid-cols-[20rem_1fr] gap-12 text-gray-100">
      <img src="../posterTest.jpg" alt="" />
      <div className="flex flex-col">
        <h2 className="mb-4 text-2xl font-medium">Storyline</h2>
        <p className="font-medium">{mediaData.overview}</p>

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
                    pathname={pathnameType}
                  >
                    {genreItem.name}
                  </ItemList>
                ))}
              </li>
              <ItemList>{status}</ItemList>
              <ItemList>{language}</ItemList>
              <span className="flex">
                {production.map((company, index) => (
                  <ItemList key={company.id}>
                    {production.length === index + 1
                      ? company.name
                      : company.name + ","}
                  </ItemList>
                ))}
              </span>
            </ul>
          </div>
          {/* <ItemList item="released">{released}</ItemList>
            <ItemList item="runtime">{runtime}</ItemList>
            <ItemList item="director">{director[0].name}</ItemList>
            <ItemList item="budget">{budget}</ItemList>
            <ItemList item="revenue">{revenue}</ItemList>
            <ItemList item="genre">
              {genre.map((genre) => (
                <ItemListMap
                  key={genre.id}
                  idGenre={genre.id}
                  nameGenre={genre.name}
                  pathname={pathnameType}
                  isLink
                />
              ))}
            </ItemList>
            <ItemList item="">{}</ItemList>
            <ItemList item="">{}</ItemList> */}
        </div>
      </div>
    </div>
  );
}

export default OverviewItem;
