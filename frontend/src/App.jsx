import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShow";

import MovieDetails, { loader as loaderMovie } from "./pages/MovieDetails";
import TvShowDetails, { loader as loaderTvShow } from "./pages/TvShowDetails";
import PageNotFound from "./pages/PageNotFound";
import MovieGenre from "./pages/MovieGenre";
import TvShowGenre from "./pages/TvShowGenre";
import Person from "./pages/Person";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movie", element: <Movie /> },
      { path: "/tv", element: <TvShow /> },
      {
        path: "/movie/:mediaId",
        element: <MovieDetails />,
        loader: loaderMovie,
      },
      {
        path: "/tv/:mediaId",
        element: <TvShowDetails />,
        loader: loaderTvShow,
      },
      {
        path: "/genre/:mediaId/movie",
        element: <MovieGenre />,
      },
      {
        path: "/genre/:mediaId/tv",
        element: <TvShowGenre />,
      },
      { path: "/person/:personId", element: <Person /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
