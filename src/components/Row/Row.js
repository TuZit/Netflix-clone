import React, { useState, useEffect } from "react";
import instance from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "./Row.scss";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, settMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await instance.get(fetchURL);
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
        navigation={true}
        modules={[Navigation]}
        className="row__posters"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
