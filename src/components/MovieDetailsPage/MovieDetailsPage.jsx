import { useState, useEffect, Suspense } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  NavLink,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import {
  getMovieDetails,
  getActorsListById,
  getReviewsTextById,
} from "../api/api";

const MovieDetailsPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();
  const movieId = useParams().movieId;

  const [movieDetails, setMovieDetails] = useState("");
  const [castList, setCastList] = useState("");
  const [reviewsText, setReviewsText] = useState("");

  useEffect(() => {
    getMovieDetails(movieId).then(
      ({ backdrop_path, title, vote_average, overview, genres }) => {
        const genresList = genres.reduce(
          (list, { name }) => list + " " + name,
          ""
        );
        const img = "https://image.tmdb.org/t/p/w500" + backdrop_path;
        setMovieDetails({
          img,
          title,
          vote_average,
          overview,
          genresList,
        });
      }
    );

    getActorsListById(movieId).then((responce) => {
      setCastList(
        responce.map(({ id, name, profile_path, character }) => {
          if (profile_path === null) return "";
          return (
            <li key={id}>
              <img
                src={"https://image.tmdb.org/t/p/w200" + profile_path}
                alt={name}
                width="80px"
              />
              <p>{name}</p>
              <p>character: {character}</p>
            </li>
          );
        })
      );
    });

    getReviewsTextById(movieId).then((response) => {
      if (response.length === 0) {
        const errorMassage = (
          <p>
            <b>We dont have any reviews for this movie</b>
          </p>
        );
        setReviewsText(errorMassage);
        return;
      }
      const result = response.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h2>Author: {author}.</h2>
            <p>{content}</p>
          </li>
        );
      });
      setReviewsText(result);
    });
  }, [movieId]);

  return (
    <>
      <button
        type="button"
        onClick={() => history.push(location?.state?.page || "/")}
      >
        Go back
      </button>
      <div style={{display:'flex', borderBottom: '1px solid grey', paddingBottom:'20px'}}>
      <img style={{display: 'block', marginRight:'20px'}} src={movieDetails.img} alt="asd" />
      
      <div>
      <h2>{movieDetails.title}</h2>
      <p>User Score: {movieDetails?.vote_average * 10 + "%"}</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>{movieDetails.genresList}</p>
      </div>
      </div>
      <div style={{borderBottom: '1px solid grey', marginTop:'7px'}}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink activeClassName = 'NavLink--active' to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink activeClassName = 'NavLink--active' to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<p>Идет загрузка...</p>}>
        <Switch>
          <Route path={`${url}/cast`}>
            <ul>{castList}</ul>
          </Route>
          <Route path={`${url}/reviews`}>{reviewsText}</Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
