import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieNewRel.css';


const API_NEWRELEASES = "https://api.themoviedb.org/3/movie/now_playing?api_key=0792c226eb31413ef49a8cb01a59d4b3";

const API_POSTER_IMG = "https://image.tmdb.org/t/p/w342/";

const API_BACKDROP_IMG = "https://image.tmdb.org/t/p/w780/";


function MovieNewReleases(){

    const [newMovies, setNewMovies] = useState([]);

    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);



    useEffect(() =>{
      fetch(API_NEWRELEASES)
      .then(res =>res.json())
      .then(data =>{
        console.log(data);
        setNewMovies(data.results);
      });
    }, []); 


    const handleNavigations = (index) => {
        setCurrentMovieIndex(index);
      };
if(newMovies.length === 0){
        return <div>Loading...</div>
    }

    const currentMovie = newMovies[currentMovieIndex];

    return(
        <div>
          <marquee direction="right">Welcome To The Movie Db</marquee>
           <h1 className="new-releases-title">New Releases
           <span role="img" aria-label="Ticket Emoji">🎫</span></h1>         
           <div className="container">
<div className="backdrop-container">
          <img src={API_BACKDROP_IMG + currentMovie.backdrop_path}  />
           <div className="poster-container">
            <img src={API_POSTER_IMG + currentMovie.poster_path}  />

            
            <div className="poster-details">
              <h3 className="title" style={{color:"white"}}>{currentMovie.title}</h3>
              <h6 style={{color:"white"}}>{currentMovie.vote_average} 🌟</h6>
              <p className="overview" style={{color:"white", maxWidth:"50%"}}>{currentMovie.overview}</p>
              </div>
          </div>
</div>
      </div>
      <hr className="line"></hr>
      <div className="bullet-navigation">

      {newMovies.map((movie, index) => (
          <button
            key={movie.id}
            className={`bullets ${index === currentMovieIndex ? 'active' : ''}`}
            onClick={() => handleNavigations(index)}
          ></button>
        ))}
      </div>
      </div>
  );
}

export default MovieNewReleases;