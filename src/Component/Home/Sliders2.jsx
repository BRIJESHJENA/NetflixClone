import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Carousel.css";

function Sliders2() {
    const [movies, setMovies] = useState([]);
  const originalImage = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=028a2d86553ae3bcc6d599f76486922e"
          )
          .then((res) => {
            setMovies(res.data.results);
            console.log(res.data.results);
          });
      }, []);
  return (
    <>
      <div className="container-fluid bg-black text-white py-2">
        <h2 className="mx-4">Top Rated</h2>
        <div className="container-fluid mx-2 row-posters">
          {movies.map((movie, i) => {
            return (
              <Link to={`/details1/${movie.id}`} className={"text-white text-decoration-none opacity bg-transparent"} >
              <div className="row-poster" key={i}>
                <img src={originalImage + movie.poster_path} style={{height: "200px"}} alt="" />
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Sliders2;

