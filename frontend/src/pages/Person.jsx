import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import { personFetch } from "../services/apiPerson";
import {
  discoverAge,
  discoverDeathAge,
  stringDate,
} from "../helpers/discoverAge";
import { PosterMovieLink, PosterTvLink } from "../components/Images";
import Loading from "../components/Loading";

const imgSrc = "https://image.tmdb.org/t/p/w500";

function Person() {
  const { personId } = useParams();

  const { data, error, isFetching, isLoading } = useQuery({
    queryKey: ["person"],
    queryFn: () => personFetch(personId),
    gcTime: 1000,
  });

  const {
    name,
    place_of_birth,
    known_for_department,
    birthday,
    biography,
    deathday,
    profile_path,
    movie_credits,
    tv_credits,
  } = data ? data : [];

  console.log(tv_credits);

  const age = discoverAge(birthday);
  const strBirthday = stringDate(birthday);
  const strDeathday = stringDate(deathday);
  const died = deathday ? Math.abs(discoverDeathAge(birthday, deathday)) : "";

  if (isLoading) <Loading />;

  return (
    <>
      <TopNav>{name}</TopNav>

      <div className="mt-8 grid grid-cols-[20rem_1fr] px-4 text-gray-100 md:px-8 xl:px-14">
        <img src={`${imgSrc}${profile_path}`} alt={`Poster of ${name}`} />

        <div className="px-8">
          <h2 className="py-2 text-xl font-medium lg:text-2xl">{name}</h2>

          <p>{biography}</p>

          {/* TODO: ADD missing information and refactor to another component */}
          <div className="py-4">
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
          </div>
        </div>
      </div>

      {/* Movies and Tv Shows posters */}
      <div className="mt-16">
        <div className="flex flex-wrap px-4">
          {movie_credits?.cast.map((movie) => (
            <PosterMovieLink
              key={movie.id}
              posterId={movie.id}
              posterName={movie.title}
              posterPath={movie.poster_path}
              posterRating={movie.vote_average}
            />
          ))}

          {tv_credits?.cast.map((tv) => (
            <PosterTvLink
              key={tv.id}
              posterId={tv.id}
              posterName={tv.name}
              posterPath={tv.poster_path}
              posterRating={tv.vote_average}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Person;
