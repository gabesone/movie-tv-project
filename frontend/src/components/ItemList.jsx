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
      <li>
        <Link to={`/person/${idPerson}`} className="text-purple-600 underline">
          {children}
        </Link>
      </li>
    );

  if (isGenre)
    return (
      <Link
        to={`/genre/${idGenre}/${pathname}`}
        className="pr-2 text-purple-600 underline"
      >
        {children}
      </Link>
    );

  return <li className="pr-2">{children}</li>;
}

export default ItemList;
