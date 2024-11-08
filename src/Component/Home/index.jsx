import axios from "axios";
import React, { useEffect, useState } from "react";
import Sliders from "./Sliders";
import Sliders1 from "./Sliders1";
import Sliders2 from "./Sliders2";
import Sliders3 from "./Sliders3";
import Sliders4 from "./Sliders4";
import Sliders5 from "./Sliders5";

function Home() {
  const [movies, setMovies] = useState([]);
  const [active, notActive] = ["carousel-item active", "carousel-item"];
  const [loading, setLoading] = useState(false);
  const originalImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=028a2d86553ae3bcc6d599f76486922e"
        )
        .then((res) => {
          setLoading(false);
          setMovies(res.data.results);
        });
    } catch (error) {
      setLoading(false);
      console.log(error, "error");
    }
  }, []);

  const videoOpen = async (id) => {
    console.log(id);

    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/271815/videos?api_key=028a2d86553ae3bcc6d599f76486922e&language=en-US`
      );
      setLoading(false);
      console.log(res);
    } catch (error) {
      setLoading(false);
      console.log(error, "error");
    }
  };

  return (
    <>
      {loading && (
        <>
          <div class="text-center bg-black">
            <div
              class={loading ? "spinner-border text-white" : ""}
              role="status"
            ></div>
          </div>
          <div>
            Please use VPN because of geo restriction from db it will not work
            in India
          </div>
        </>
      )}
      <div id="carouselExampleControls" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: "50%" }}>
          {movies.map((movie, i) => (
            <div key={i} className={i === 0 ? active : notActive}>
              <img
                src={originalImage + movie.backdrop_path}
                className="d-block w-100"
                style={{ height: "80vh" }}
                alt={movie.original_title || movie.original_name}
              />

              <div
                className="position-absolute bottom-0 start-0 text-white  py-2"
                style={{
                  width: "43rem",
                  background:
                    "linear-gradient(95deg,#000000 10%,transparent 100%)",
                }}
              >
                <div
                  className="position-absolute bottom-0 text-white p-5 h-80"
                  style={{
                    width: "43rem",
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
                    <button
                      type="button"
                      className="btn btn-light btn-sm me-2"
                      onClick={() => videoOpen(movie.id)}
                    >
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
            </div>
          ))}
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
