const APIKEY = "002150d441c63aff2bc906e3d758fe35";

const request = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_network=231`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
};

export default request;
