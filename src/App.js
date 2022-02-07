import React from "react";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import request from "./components/request";
import Nav from "./components/Nav/Nav";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchURL={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Romance Movie" fetchURL={request.fetchRomanceMovies} />
      <Row title="Action Movie" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movie" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movie" fetchURL={request.fetchHorrorMovies} />
      <Row title="Documentaries Movie" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
