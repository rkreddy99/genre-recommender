import React from "react";
import "./App.css";
import { useState } from "react";

function App() {

  const [selectedGenre, setGenre] = useState("Action");

  const movieDB = {
    Action: [
      { name: "The Suicide Squad (2021)", link: "https://www.imdb.com/title/tt6334354/", rating: "7.9" },
      { name: "The Matrix (1999)", link: "https://www.imdb.com/title/tt0133093/", rating: "8.7" },
      { name: "Gladiator (2000)", link: "https://www.imdb.com/title/tt0172495/", rating: "8.5" },
      { name: "The Dark Knight (2008)", link: "https://www.imdb.com/title/tt0468569/", rating: "9.0" },
      { name: "Inception (2010)", link: "https://www.imdb.com/title/tt1375666/", rating: "8.8" },
    ],
  
    Horror: [
      {name: "A Quiet Place (2018)", link: "https://www.imdb.com/title/tt6644200/", rating: "7.5"},
      {name: "Don't Breathe (2016)", link: "https://www.imdb.com/title/tt4160708/", rating: "7.1"},
      {name: "Doctor Sleep (2019)", link: "https://www.imdb.com/title/tt5606664/", rating: "7.3"},
      {name: "Alien (1979)", link: "https://www.imdb.com/title/tt0078748/", rating: "8.4"},
    ],
  
    Comedy: [
      {name: "Anchorman: The Legend of Ron Burgundy (2004)", link: "https://www.imdb.com/title/tt0357413/", rating: "7.2"},
      {name: "This Is the End (2013)", link: "https://www.imdb.com/title/tt1245492/", rating: "6.6"},
      {name: "The Hangover (2009)", link: "https://www.imdb.com/title/tt1119646/", rating: "7.7"},
    ]
  };

  return (
    <div className="App">
      <h1> 🎥 Movie Recommender </h1>
      <p> Checkout my favorite movies. Select a genre to get started... </p>

      <div className="genre">
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => setGenre(genre)}
            className={genre === selectedGenre ? "genre-button selected-genre" : "genre-button"}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="recommended">
        <ul>
          {movieDB[selectedGenre].map((movie) => (
            <li key={movie.name} >
              <a href={movie.link} target="_blank">
                <div className="movie-name"> {movie.name} </div>
                <div className="movie-rating"> ⭐ {movie.rating} </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;