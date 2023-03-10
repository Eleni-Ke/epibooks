import { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import fantasyItems from "../data/books/fantasy.json";
import historyItems from "../data/books/history.json";
import horrorItems from "../data/books/horror.json";
import romanceItems from "../data/books/romance.json";
import scifiItems from "../data/books/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid>
        <div>
          <h2>Fantasy</h2>

          <Row className="mt-3 justify-content-center">
            {fantasyItems.map((fantasyBook) => {
              return (
                <Card
                  key={fantasyBook.asin}
                  style={{ width: "8rem", height: "8rem", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={fantasyBook.img}
                    style={{ objectFit: "cover" }}
                  />
                </Card>
              );
            })}
          </Row>
        </div>
        <div>
          <h2>History</h2>

          <Row className="mt-3 justify-content-center">
            {historyItems.map((historyBook) => {
              return (
                <Card
                  key={historyBook.asin}
                  style={{ width: "8rem", height: "8rem", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={historyBook.img}
                    style={{ objectFit: "cover" }}
                  />
                </Card>
              );
            })}
          </Row>
        </div>
        <div>
          <h2>Horror</h2>

          <Row className="mt-3 justify-content-center">
            {horrorItems.map((horrorBook) => {
              return (
                <Card
                  key={horrorBook.asin}
                  style={{ width: "8rem", height: "8rem", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={horrorBook.img}
                    style={{ objectFit: "cover" }}
                  />
                </Card>
              );
            })}
          </Row>
        </div>
        <div>
          <h2>Romance</h2>

          <Row className="mt-3 justify-content-center">
            {romanceItems.map((romanceBook) => {
              return (
                <Card
                  key={romanceBook.asin}
                  style={{ width: "8rem", height: "8rem", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={romanceBook.img}
                    style={{ objectFit: "cover" }}
                  />
                </Card>
              );
            })}
          </Row>
        </div>
        <div>
          <h2>Scifi</h2>

          <Row className="mt-3 justify-content-center">
            {scifiItems.map((scifiBook) => {
              return (
                <Card
                  key={scifiBook.asin}
                  style={{ width: "8rem", height: "8rem", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={scifiBook.img}
                    style={{ objectFit: "cover" }}
                  />
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
