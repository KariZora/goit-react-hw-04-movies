import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const getTrendingMovies = () => {
  return axios
    .get(`/trending/movie/day?api_key=381e4b32f80b6d35c69daa1c549c8820`)
    .then((results) => results.data.results)
    .catch((error) => console.log(error));
};

const searchMovies = (name) => {
  return axios
    .get(`/search/movie?api_key=381e4b32f80b6d35c69daa1c549c8820&query=${name}`)
    .then((results) => results.data.results)
    .catch((error) => console.log(error));
};

const getMovieDetails = (id) => {
  return axios
    .get(`/movie/${id}?api_key=381e4b32f80b6d35c69daa1c549c8820`)
    .then((results) => results.data)
    .catch(function (error) {
      console.log(error);
    });
};

const getActorsListById = (id) => {
  return (
    axios
      .get(`/movie/${id}/credits?api_key=f9bd48f5e3b13d2262b70dc60f892c4d`)
      .then((results) => results.data.cast)
      .catch(function (error) {
        console.log(error);
      })
  );
};

const getReviewsTextById = (id) => {
  return (
    axios
      .get(`/movie/${id}/reviews?api_key=f9bd48f5e3b13d2262b70dc60f892c4d`)
      .then((results) => results.data.results)
      .catch(function (error) {
        console.log(error);
      })
  );
};

export {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
  getActorsListById,
  getReviewsTextById,
};
