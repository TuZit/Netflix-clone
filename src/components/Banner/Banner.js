import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../request";
import "./Banner.scss";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(request.fetchTrending);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length) - 1
        ]
      );
      return res;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button type="button" className="banner-btn">
            Play
          </button>
          <button type="button" className="banner-btn">
            My List
          </button>
        </div>
        <p className="banner__desc">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner__fadeBot"></div>
    </div>
  );
}

export default Banner;
