import React from "react";
import { getTrendingMovies } from "../api/api";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then((response) =>
      setMovies(
        response.map(({ title, id }) => (
          <li key={id}>
            <NavLink to={{ pathname: `/movies/${id}`, state: { page: "/" } }}>
              {title}
            </NavLink>
          </li>
        ))
      )
    );
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>{movies}</ul>
    </>
  );
};

export default HomePage;
