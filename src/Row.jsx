import React, { useState, useEffect } from "react";
import instance from "./axios";
import "./css/Row.css";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const image_base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovie] = useState([]);
  const [isPlayTrailer, setIsPlayTrailer] = useState(false);
  const [movieUrl, setMovieUrl] = useState("");

  useEffect(() => {
    async function getMovie() {
      const request = await instance.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    getMovie();
  }, [fetchUrl]);

  const playTrailer = async (movieTitle) => {
    setIsPlayTrailer(!isPlayTrailer);
    const url = await movieTrailer(movieTitle);
    setMovieUrl(url);
  };

  // console.table(movies);
  return (
    <div>
      {/* Title */}
      <h1> {title} </h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow ? "row_poster_large" : ""}`}
            src={`${image_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            key={movie.id}
            alt=""
            onClick={() => playTrailer(movie?.title)}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isPlayTrailer ? <ReactPlayer url={movieUrl} /> : ""}
      </div>
    </div>
  );
}

export default Row;
