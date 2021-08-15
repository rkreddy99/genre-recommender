import React from "react";
import "./App.css";
import { useState } from "react";

function App() {

  const [selectedGenre, setGenre] = useState("Action");

  const movieDB = {
    Action: [
      { name: "The Suicide Squad (2021)", link: "https://www.imdb.com/title/tt6334354/", rating: "7.9", description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese." },
      { name: "The Matrix (1999)", link: "https://www.imdb.com/title/tt0133093/", rating: "8.7", description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence." },
      { name: "Gladiator (2000)", link: "https://www.imdb.com/title/tt0172495/", rating: "8.5", description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery." },
      { name: "The Dark Knight (2008)", link: "https://www.imdb.com/title/tt0468569/", rating: "9.0", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
      { name: "Inception (2010)", link: "https://www.imdb.com/title/tt1375666/", rating: "8.8", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O." },
    ],
  
    Horror: [
      {name: "A Quiet Place (2018)", link: "https://www.imdb.com/title/tt6644200/", rating: "7.5", description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."},
      {name: "Don't Breathe (2016)", link: "https://www.imdb.com/title/tt4160708/", rating: "7.1", description: "Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man who isn't as helpless as he seems."},
      {name: "Doctor Sleep (2019)", link: "https://www.imdb.com/title/tt5606664/", rating: "7.3", description: "Years following the events of The Shining (1980), a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal."},
      {name: "Alien (1979)", link: "https://www.imdb.com/title/tt0078748/", rating: "8.4", description: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun."},
    ],
  
    Comedy: [
      {name: "Anchorman: The Legend of Ron Burgundy (2004)", link: "https://www.imdb.com/title/tt0357413/", rating: "7.2", description: "Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change for Ron and his cronies when an ambitious woman is hired as a new anchor."},
      {name: "This Is the End (2013)", link: "https://www.imdb.com/title/tt1245492/", rating: "6.6", description: "Six Los Angeles celebrities are stuck in James Franco's house after a series of devastating events just destroyed the city. Inside, the group not only have to face the apocalypse, but themselves."},
      {name: "The Hangover (2009)", link: "https://www.imdb.com/title/tt1119646/", rating: "7.7", description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding."},
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
              <a href={movie.link} target="_blank" rel="noreferrer">
                <div className="movie-name"> {movie.name} </div>
                <div className="movie-description"> {movie.description} </div>
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
