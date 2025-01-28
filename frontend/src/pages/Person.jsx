import { useParams } from "react-router-dom";
import { SiImdb } from "react-icons/si";
import { useState } from "react";

import TopNav from "../components/TopNav";
import {
  discoverAge,
  discoverDeathAge,
  stringDate,
} from "../helpers/discoverAge";
import { PersonPoster } from "../components/Images";
import Loading from "../components/Loading";
import { filterDuplicates } from "../helpers/filterDuplicates";
import usePersonData from "../hooks/usePersonData";
import SelectedItem from "../components/SelectedItem";
import KnownFor from "../components/KnownFor";
import Credits from "../components/Credits";
import PhotosItem from "../components/PhotosItem";

function Person() {
  const [selected, setSelected] = useState("known for");
  const { personId } = useParams();
  const { personQuery } = usePersonData(personId);

  const {
    name,
    place_of_birth,
    known_for_department,
    birthday,
    biography,
    deathday,
    profile_path,
    imdb_id,
    combined_credits,
    images,
  } = personQuery.data ? personQuery.data : [];

  const formatedBiography = biography
    ? biography
        .split("\n")
        .map((paragraph) => paragraph.trim())
        .filter((p) => p !== "")
    : [];

  const moviesPosters = combined_credits?.crew.filter(
    (movie) => movie.media_type === "movie",
  );
  const tvShowsPosters = combined_credits?.crew.filter(
    (tv) => tv.media_type === "tv",
  );

  // TODO: add a new filter array from cast, based on role of person (director/actor)

  // Filtered movies and tv shows posters
  const filteredMovies = filterDuplicates(moviesPosters);
  const filteredTvShows = filterDuplicates(tvShowsPosters);

  const age = discoverAge(birthday);
  const strBirthday = stringDate(birthday);
  const strDeathday = stringDate(deathday);
  const died = deathday ? Math.abs(discoverDeathAge(birthday, deathday)) : "";

  if (personQuery.isLoading) <Loading />;

  return (
    <>
      <TopNav>{name}</TopNav>

      <div>
        <div className="mt-8 px-4 text-gray-100 md:px-8 lg:flex xl:px-14">
          <PersonPoster profileName={name} profilePath={profile_path} />

          <div>
            <h2 className="mb-4 text-xl font-medium lg:text-2xl">{name}</h2>
            <div className="space-y-4">
              {formatedBiography?.map((paragraph, index) => (
                <p key={index} className="max-w-[64ch] tracking-wide">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* TODO: ADD missing information and refactor to another component */}
            <div className="flex flex-col flex-nowrap py-8">
              <ul className="max-w-fit">
                <li className="grid grid-cols-2">
                  <div>Known For</div>
                  <div>{known_for_department}</div>
                </li>
                <li className="grid grid-cols-2">
                  <div>Born</div>
                  <div>
                    {strBirthday} {deathday ? "" : `(age ${age})`}
                  </div>
                </li>
                <li className="grid grid-cols-2">
                  <div>Place of Birth</div>
                  <div>{place_of_birth}</div>
                </li>
                {deathday ? (
                  <li className="grid grid-cols-2">
                    <div>Died</div>
                    <div>
                      {strDeathday} {`(aged ${died})`}
                    </div>
                  </li>
                ) : (
                  ""
                )}
              </ul>

              {/* External link: IMDb page */}
              <div className="my-8 w-fit text-2xl text-gray-100 transition-colors duration-300 hover:text-purple-600">
                <a
                  href={`https://www.imdb.com/name/${imdb_id}`}
                  target="_blank"
                  aria-label={`IMDb link of ${name}`}
                >
                  <SiImdb />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Movies or Tv shows, credits and photos information about this person */}
        <div>
          <nav className="mb-8 flex xl:my-8">
            <ul className="flex w-full items-center gap-[1px] text-base font-medium uppercase text-gray-500 xl:justify-center xl:gap-16 xl:text-xl">
              <SelectedItem selected={selected} setSelected={setSelected}>
                known for
              </SelectedItem>
              <SelectedItem selected={selected} setSelected={setSelected}>
                credits
              </SelectedItem>
              <SelectedItem selected={selected} setSelected={setSelected}>
                photos
              </SelectedItem>
            </ul>
          </nav>

          <div>
            {/* If selected is equal known for */}
            {selected === "known for" && (
              <KnownFor
                filteredMovies={filteredMovies}
                filteredTvShows={filteredTvShows}
              />
            )}

            {/* If selected is equal credits */}
            {selected === "credits" && <Credits />}

            {/* If selected is equal photos */}
            {selected === "photos" && <PhotosItem images={images} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Person;
