import { useQuery } from "@tanstack/react-query";

import TopNav from "../components/TopNav";
import { personFetch } from "../services/apiPerson";
import { useParams } from "react-router-dom";

const imgSrc = "https://image.tmdb.org/t/p/w500";

function Person() {
  const { personId } = useParams();

  const { data, error, isFetching } = useQuery({
    queryKey: ["person"],
    queryFn: () => personFetch(personId),
  });

  console.log(data);

  const {
    name,
    place_of_birth,
    known_for_department,
    birthday,
    biography,
    deathday,
    profile_path,
  } = data ? data : [];

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
                <div>{birthday} (age X)</div>
              </li>
              <li className="grid grid-cols-2">
                <div>Place of Birth</div>
                <div>{place_of_birth}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Person;
