import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Sliders from "./Sliders";
import Sliders1 from "./Sliders1";
import Sliders2 from "./Sliders2";
import Sliders3 from "./Sliders3";
import Sliders4 from "./Sliders4";
import Sliders5 from "./Sliders5";

function Home() {
  const [movies, setMovies] = useState([]);
  const [active, notActive] = ["carousel-item active", "carousel-item"]
  const originalImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
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
      <div
        id="carouselExampleSlidesOnly"
        class="position-relative carousel slide"
        data-bs-ride="carousel"
        
      >
        <div class="carousel-inner" style={{ height: "80%" }}>
          {/*<div class="carousel-item active">
             <img
              src="https://image.tmdb.org/t/p/original/n6vVs6z8obNbExdD3QHTr4Utu1Z.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div
              className="position-absolute bottom-0 start-10 text-white p-5"
              style={{ marginBottom: "12%" }}
            >
              <h1>
                <b>The Boys</b>
              </h1>
              <div className="d-flex">
                <button type="button" className="btn btn-light btn-sm me-2">
                  <i className="fas fa-play" style={{ color: "black" }}></i>{" "}
                  PLAY
                </button>
                <button type="button" className="btn btn-secondary btn-sm">
                  <i
                    className="far fa-info-circle"
                    style={{ color: "white" }}
                  ></i>{" "}
                  More Info
                </button>
              </div>
            </div> 
          </div> */}
          {movies.map((movie, i) => {
            return (
              <div class="carousel-item" 
              key={i}
              className={i === 0 ? active : notActive}
              >
                <img
                  src={originalImage + movie.backdrop_path}
                  class="d-block w-100"
                  alt="..."
                />
                <div
                  className="position-absolute bottom-0 start-10 text-white p-5 h-100"
                  style={{
                    background: "linear-gradient(90deg,#111 10%,transparent 100%)",
                    width: "43rem",
                    height: "130%"
                  }}
                >
                  {movie.original_title ? (
                    <h1>
                      <b>{movie.original_title}</b>
                    </h1>
                  ) : (
                    <h1>
                      <b>{movie.original_name}</b>
                    </h1>
                  )}
                  <p>{movie.overview}</p>                  
                  <div className="d-flex">
                    <button type="button" className="btn btn-light btn-sm me-2">
                      <i className="fas fa-play" style={{ color: "black" }}></i>{" "}
                      PLAY
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm">
                      <i
                        className="far fa-info-circle"
                        style={{ color: "white" }}
                      ></i>{" "}
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <Sliders1 />
      <Sliders2 />
      <Sliders />
      <Sliders3 />
      <Sliders4 />
      <Sliders5 />
    </>
  );
}

export default Home;
