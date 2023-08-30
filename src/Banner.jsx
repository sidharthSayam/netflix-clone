import React, { useState, useEffect } from "react";
import instance from "./axios";
import requests from "./requests";
import "./css/Banner.css";

const image_base_url = "https://image.tmdb.org/t/p/original";

function trumpet(str, n) {
  return str?.length > n ? str.substr(0, n) + "..." : str;
}

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getBanner() {
      const req = await instance.get(requests.fetchTopRated);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * (req.data.results.length - 1))
        ]
      );

      return req;
    }
    getBanner();
  }, []);

  return (
    <header
      className="Banner"
      style={{
        backgroundImage: `url(${image_base_url}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_components">
        {/* Title */}
        <h1 className="title">{movie?.original_title || movie?.title}</h1>
        {/* Buttons */}
        <div className="btn">
          b<button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        {/* Description */}
        <div className="banner_description">{trumpet(movie.overview, 150)}</div>
      </div>
      {/* <div className="banner--gradient"></div> */}
    </header>
  );
}

export default Banner;
