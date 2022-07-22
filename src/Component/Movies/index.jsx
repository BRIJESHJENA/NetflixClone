import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Page.css";

function Movies() {
    const [movies, setMovies] = useState([]);
  const originalImage = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {    
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=028a2d86553ae3bcc6d599f76486922e"
          )
          .then((res) => {
            setMovies(res.data.results);
            // console.log(res.data.results);
          });
      }, []);
  return (
    <>
      <div className="container-fluid bg-black text-white py-5">
        <h2 className="mx-4">Movies</h2>
        <div className="container-fluid d-flex flex-wrap mx-2 posters">
          {movies.map((movie, i) => {
            return (
              <Link to={`/details/${movie.id}`} >
              <div className="poster" key={i}>
                <img src={originalImage + movie.backdrop_path} alt="" />
                <div className="position-relative">
                  <h6 className="position-absolute bottom-0 start-10 text-white p-2">{movie.original_title}</h6>
                </div>
              </div>   
              </Link>           
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Movies;

