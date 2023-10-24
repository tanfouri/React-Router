import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import dbMovies from '../dbMovies';
import Button from 'react-bootstrap/Button';
import { Route, Routes  } from'react-router-dom';
import MovieDescription from './MovieDescription';
//import './App.css';

const Movie=()=>{

const [movies, setMovies] = useState(dbMovies);
const [filteredMovies, setFilteredMovies] = useState([]);
const [filter, setFilter] = useState({ title: '', rating: 0 });

const addMovie = (title, description, posterURL, rating , trailerLink) => {
  const newMovie = { title, description, posterURL, rating, trailerLink };
  setMovies(prevMovies => [...prevMovies, newMovie]);
};

const filterMovies = () => {
  const { title, rating } = filter;
  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()) && movie.rating === rating);
  setFilteredMovies(filtered);
};


return (
    
  <div>
    <div  >
        <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{display:"flex", justifyContent:"flex-start"}}>
    <Filter
      onTitleChange={title => setFilter(prevFilter => ({ ...prevFilter, title }))}
      onRatingChange={rating => setFilter(prevFilter => ({ ...prevFilter, rating }))}
    />

<Button variant="primary" onClick={filterMovies } >Filter</Button>
    </div>
    <div style={{display:"flex"}}>
    <AddMovieForm addMovie={addMovie} />
    </div>
    </div>
    <div style={{alignContent:"center"}}>
    <h1>Movie List</h1>
    <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />} />
          {movies.map((movie) => (
            <Route
             
              path={`/movies/${movie.title}`}
              element={<MovieDescription movie={movie} />}
            />
          ))}
         
        </Routes>
   
    </div>
    
    </div>
  </div>
);
};

export default Movie;