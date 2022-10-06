import Card from 'react-bootstrap/Card';
import "../stylesheet/cardComponent.css"

function CardComponent({ image, title, description }) {
  return (
    <Card className="bg-dark" id="card-container">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="fs-6">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;