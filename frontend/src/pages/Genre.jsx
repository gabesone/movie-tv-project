import { useParams } from "react-router-dom";

function Genre() {
  const { mediaType } = useParams();
  console.log(mediaType);

  return <div>Genre: ??</div>;
}

export default Genre;
