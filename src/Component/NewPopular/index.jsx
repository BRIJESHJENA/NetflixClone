import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Page.css";

function Popular() {
  const [movies, setMovies] = useState([]);
  const originalImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    // const baseUrl = "https://api.themoviedb.org/3";
    // const apikey = "028a2d86553ae3bcc6d599f76486922e";
    // const w500Img = (imgPath) =>
    //   "https://image.tmdb.org/t/p/w500" + { imgPath };

    // const fetchTrending = {baseUrl}+"/trending/all/day?api_key=" + { apikey };
    // const fetchNetflixOriginals = {baseUrl}+ "/discover/tv?api_key=" + { apikey };
    // const fetchTopRated = {baseUrl}+ "/movie/top_rated?api_key=" + { apikey };
    // const fetchComedyMovies =
    //   {baseUrl}+ "/discover/movie?api_key=" + { apikey } + "&with_genres=35";
    // const fetchRomanceMovies =
    //   {baseUrl}+ "/discover/movie?api_key=" + { apikey } + "&with_genres=10749";
    // const fetchDocumentaries =
    //   {baseUrl}+ "/discover/movie?api_key=" + { apikey } + "&with_genres=99";

    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=028a2d86553ae3bcc6d599f76486922e"
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, []);
  return (
    <>
      <div className="container-fluid bg-black text-white py-5">
        <h2 className="mx-4">New and Popular</h2>
        <div className="container-fluid d-flex flex-wrap mx-2 posters">
          {movies.map((movie, i) => {
            return (
              <Link to={`/details/${movie.id}`} >
              <div className="poster" key={i}>
                <img src={originalImage + movie.backdrop_path} alt="" />
                <div className="position-relative">
                  {
                    <h6 className="position-absolute bottom-0 start-10 text-white p-2">
                      {movie.original_title ? (
                          <>{movie.original_title}</>
                      ) : (
                          <>{movie.original_name}</>
                      )}
                    </h6>
                  }
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Popular;
