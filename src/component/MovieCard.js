import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
//componet pour representer laffichage un seul movie dans un card
const MovieCard = ({ title, description, posterURL, rating }) => (
    <div >
  
      <Card style={{ width: '18rem'}}>
      <Link to={`/movies/${title}`}>
      <Card.Img variant="top" src={posterURL} /></Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}<br/>
         <h3>Rating :{rating}</h3>
        </Card.Text>
      
      </Card.Body>
    </Card>
    
    </div>
  );

  export default MovieCard;