import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center text-gray-100">
      <h2>The page you are looking for could not be found!</h2>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default PageNotFound;
