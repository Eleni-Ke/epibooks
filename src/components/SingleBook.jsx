import { Component } from "react";
import { Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  // checkSelected = (value) =>
  //   value === this.props.selectedBookFromApp ? "selected" : "";
  render() {
    return (
      <Col>
        <Card className="main-card">
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={(e) => {
              this.props.changeSelectedBookFromApp(this.props.book);
              console.log(this.props.book);
            }}
            className={
              this.props.selectedBookFromApp === this.props.book
                ? "border-danger"
                : ""
            }
          />
          <Card.Body className="main-card-body">
            <Card.Title className="truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
          {/* {this.state.selected && (
            <CommentArea book={this.props.book} id={this.props.book.asin} />
          )} */}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
