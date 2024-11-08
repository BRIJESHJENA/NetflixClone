import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Assets/Page.css";
import { Link } from "react-router-dom";

function Series() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const originalImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(
          "https://api.themoviedb.org/3/discover/tv?api_key=028a2d86553ae3bcc6d599f76486922e"
        )
        .then((res) => {
          setLoading(false);
          setMovies(res.data.results);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="container-fluid bg-black text-white py-5">
        <div class="text-center bg-black">
          <div
            class={loading ? "spinner-border text-white" : ""}
            role="status"
          ></div>
        </div>
        <h2 className="mx-4">TV Series</h2>
        <div className="container-fluid d-flex flex-wrap mx-2 posters">
          {movies.map((movie, i) => {
            if (movie.backdrop_path === null) {
            } else {
              return (
                <Link to={`/series/${movie.id}`}>
                  <div className="poster position-relative" key={i}>
                    <img src={originalImage + movie.backdrop_path} alt="" />
                    <div className="position-relative">
                      <h6 className="position-absolute bottom-0 start-10 text-white p-2">
                        {movie.original_name}
                      </h6>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Series;
