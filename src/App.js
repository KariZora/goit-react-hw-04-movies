import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() =>
  import("./components/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import(
    "./components/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
  )
);

const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Идет загрузка...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
