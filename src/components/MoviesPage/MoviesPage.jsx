import React from "react";
import { searchMovies } from "../api/api";
import { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [moviesList, setMoviesList] = useState("");

  const location = useLocation();
  const history = useHistory();

  const searchOrder = new URLSearchParams(location.search).get("query");

  const searchMovie = (event) => {
    event.preventDefault();
    history.push({ ...location, search: `query=${searchValue}` });
  };

  useEffect(() => {
    if (searchOrder === null) return;

    searchMovies(searchOrder).then((response) => {
      setMoviesList(
        response.map(({ title, id }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { page: `/movies${location.search}` },
              }}
            >
              {title}
            </Link>
          </li>
        ))
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchOrder]);

  return (
    <>
      <form onSubmit={searchMovie}>
        <label>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">Search</button>
        </label>
      </form>
      {{ moviesList } && <ul>{moviesList}</ul>}
    </>
  );
};

export default MoviesPage;
