import { Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col key={props.book.asin}>
      <Card className="singleBook">
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
