import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col>
        <Card
          onClick={() => {
            if (this.state.selected) {
              this.setState({ selected: false });
            } else {
              this.setState({ selected: true });
            }
          }}
          className={
            this.state.selected ? "border-danger main-card" : "main-card"
          }
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body className="main-card-body">
            <Card.Title className="truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
          {this.state.selected && (
            <CommentArea book={this.props.book} id={this.props.book.asin} />
          )}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
