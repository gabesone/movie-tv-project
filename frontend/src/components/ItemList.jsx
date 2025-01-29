import { Link } from "react-router-dom";

function ItemList({
  children,
  isPerson,
  isGenre,
  idPerson,
  pathname,
  idGenre,
}) {
  if (isPerson)
    return (
      <Link
        to={`/person/${idPerson}`}
        className="text-purple-600 underline hover:no-underline"
      >
        {children}
      </Link>
    );

  if (isGenre)
    return (
      <Link
        to={`/genre/${idGenre}/${pathname}`}
        className="text-purple-600 underline hover:no-underline"
      >
        {children}
      </Link>
    );

  return <li className="pr-2">{children}</li>;
}

export default ItemList;
