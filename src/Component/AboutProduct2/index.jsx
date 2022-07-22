import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AboutProduct2() {
  const [product, setProduct] = useState([]);
  const originalImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=028a2d86553ae3bcc6d599f76486922e"
      )
      .then((res) => {
        setProduct(res.data.results);
        console.log(res.data.results);
      });
  }, []);

  const productId = useParams();
  const productDetails = product.filter((x) => x.id == productId.id);
  const products = productDetails[0];
//   console.log(products);

  return (
    <>
      <div className="container-fluid bg-black">
      {products && (
          <>
              <img
                src={originalImage + products.backdrop_path}
                alt="" className="img-fluid h-75"
              />
            <div
              className="position-absolute top-0 start-0"
              style={{
                background: "linear-gradient(90deg,#111 10%,transparent 100%)",
                width: "43rem",
                height: "130%"
              }}
            ></div>
            <div
              className="position-absolute bottom-0 start-0 text-white p-5 text-white p-5"
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
                <button type="button" className="btn btn-secondary btn-sm">
                  <i
                    className="far fa-info-circle"
                    style={{ color: "white" }}
                  ></i>
                  More Info
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AboutProduct2;
