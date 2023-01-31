import { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import fantasyItems from "../data/books/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <div>
          <h2>Fantasy</h2>
          <Row>
            {fantasyItems.map((fantasyBook) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={fantasyBook.img} />
                </Card>
              );
            })}
          </Row>
        </div>
      </Container>
    );
  }
}

export default AllTheBooks;
