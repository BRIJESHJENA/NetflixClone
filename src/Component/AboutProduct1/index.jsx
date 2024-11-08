import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function AboutProduct1() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const originalImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=028a2d86553ae3bcc6d599f76486922e"
        )
        .then((res) => {
          setLoading(false);
          setProduct(res.data.results);
        });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }, []);

  const productId = useParams();
  const productDetails = product.filter((x) => x.id == productId.id);
  const products = productDetails[0];

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div class="text-center bg-black">
        <div
          class={loading ? "spinner-border text-white" : ""}
          role="status"
        ></div>
      </div>
      <div className="container-fluid bg-black">
        {products && (
          <>
            <img
              src={originalImage + products.backdrop_path}
              alt=""
              className="img-fluid w-100"
            />
            <div
              className="position-absolute top-0 start-0"
              style={{
                background: "linear-gradient(90deg,#111 10%,transparent 100%)",
                width: "43rem",
                height: "130%",
              }}
            ></div>
            <div
              className="position-absolute top-0 text-white p-5 text-white p-5"
              style={{ width: "43rem" }}
            >
              {products.original_title ? (
                <h1>
                  <b>{products.original_title}</b>
                </h1>
              ) : (
                <h1>
                  <b>{products.original_name}</b>
                </h1>
              )}
              <p>{products.overview}</p>
              <div className="d-flex">
                <button type="button" className="btn btn-light btn-sm me-2">
                  <i className="fas fa-play" style={{ color: "black" }}></i>
                  PLAY
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="container-fluid text-white py-2"
        style={{ position: "absolute", bottom: 0 }}
      >
        <h2 className="mx-4">More Like This</h2>
        <div className="container-fluid mx-2 row-posters">
          {product.map((movie, i) => {
            if (productId.id == movie.id) {
              return <></>;
            } else {
              return (
                <Link
                  to={`/top_rated/${movie.id}`}
                  className={
                    "text-white text-decoration-none opacity bg-transparent"
                  }
                >
                  <div className="row-poster" key={i}>
                    <img
                      src={originalImage + movie.poster_path}
                      style={{ height: "20rem" }}
                      alt=""
                    />
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutProduct1;
