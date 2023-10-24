import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
//component pour ajouter un movie
const AddMovieForm = ({ addMovie }) => {
  //hooks
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');
    const [trailerLink , setTrailerLink]= useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addMovie(title, description, posterURL, parseFloat(rating), trailerLink);
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
      setTrailerLink('');
        };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} 
               onChange={e => setTitle(e.target.value)} required
              />
        <input type="text" placeholder="Description" value={description} 
              onChange={e => setDescription(e.target.value)} required
               />
        <input type="url" placeholder="Poster URL" value={posterURL} 
        onChange={e => setPosterURL(e.target.value)} required 
        />
         <input type="url" placeholder="Trailer Link" value={trailerLink} 
        onChange={e => setTrailerLink(e.target.value)} required 
       />
        <input type="number" placeholder="Rating" min="0" max="10" step="1" value={rating}
         onChange={e => setRating(e.target.value)} required 
        />
        <Button  type="submit"  >Add</Button>
      </form>
    );
  };
  export default AddMovieForm