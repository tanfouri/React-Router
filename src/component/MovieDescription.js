import { Link } from "react-router-dom";
const MovieDescription = ({ movie }) => {
    return (
      <div >
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
        <Link to="/">Back to Home</Link>
      </div>
    );
  };
  export default MovieDescription;