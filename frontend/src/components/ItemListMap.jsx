import { Link } from "react-router-dom";

function ItemListMap({ idGenre, nameGenre, isLink, pathname, children }) {
  if (isLink)
    return (
      <Link
        to={`/genre/${idGenre}/${pathname}`}
        className="pr-2 text-purple-600 underline"
      >
        {nameGenre}
      </Link>
    );

  return <div>{children}</div>;
}

export default ItemListMap;
