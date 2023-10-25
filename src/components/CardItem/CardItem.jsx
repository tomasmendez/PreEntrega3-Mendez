import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CardItem.css';


function CardItem(props) {
  return (
    <Card className="CardItem" >
      <Link className='imgCard' to={`/producto/${props.item.id}`}><Card.Img variant="top" src={props.item.pic} /></Link>
      <Card.Body>
        <Card.Title class="CardTitle">{props.item.name}</Card.Title>
        <Card.Text class="CardText">
          <p>Categoria {props.item.category}</p><p>Precio ${props.item.price}</p>
        </Card.Text>
        <Link to={`/producto/${props.item.id}`}><Button class="CardButton">Detalle</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default CardItem;