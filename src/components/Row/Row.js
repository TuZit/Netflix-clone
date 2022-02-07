import React, { useState, useEffect } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "./Row.scss";
const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, settMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchURL);
      //   console.log(res);
      settMovies(res.data.results);
      return res;
    }

    fetchData();
  }, [fetchURL]);
  //   console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row-container">
      <h2>{title}</h2>
      <Swiper
        slidesPerView={6}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        className="row__posters"
      >
        {movies.map((movie, index) => (
          <SwiperSlide>
            <img
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title}
              className={`row__posters-items ${
                isLargeRow && "row__posterLarge"
              }`}
              onClick={() => handleClick(movie)}
            />
            {/* <p className="poster__title">{movie.name || movie.title}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
