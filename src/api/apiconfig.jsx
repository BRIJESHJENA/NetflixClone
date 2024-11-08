export const apiconfig = {
  baseUrl: "https://api.themoviedb.org/3",
  apikey: "028a2d86553ae3bcc6d599f76486922e",
  originalImage: (imgPath) =>
    "https://image.tmdb.org/t/p/original/" + { imgPath },
  w500Img: (imgPath) => "https://image.tmdb.org/t/p/w500/" + { imgPath },
};

export const request = {
  fetchTrending: `${apiconfig.baseUrl}/trending/all/day?api_key=${apiconfig.apikey}`,
  fetchNetflixOriginals: `${apiconfig.baseUrl}/discover/tv?api_key=${apiconfig.apikey}`,
  fetchTopRated: `${apiconfig.baseUrl}/movie/top_rated?api_key=${apiconfig.apikey}`,
  fetchMovies: `${apiconfig.baseUrl}/discover/movie?api_key=${apiconfig.apikey}`,
  fetchActionMovies: `${apiconfig.baseUrl}/discover/movie?api_key=${apiconfig.apikey}&with_genres=28`,
  fetchComedyMovies: `${apiconfig.baseUrl}/discover/movie?api_key=${apiconfig.apikey}&with_genres=35`,
  fetchHorrorMovies: `${apiconfig.baseUrl}/discover/movie?api_key=${apiconfig.apikey}&with_genres=27`,
  fetchRomanceMovies: `${apiconfig.baseUrl}/discover/movie?api_key=${apiconfig.apikey}&with_genres=10749`,
  fetchDocumentaries: `${apiconfig.baseUrl}/discover/movie?api_key=${apiconfig.apikey}&with_genres=99`,
};
