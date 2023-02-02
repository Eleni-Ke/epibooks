import { Component } from "react";
import { Card, Col } from "react-bootstrap";

// const SingleBook = (props) => {
//   return (
//     <Col key={props.book.asin}>
//       <Card className="singleBook">
//         <Card.Img variant="top" src={props.book.img} />
//         <Card.Body>
//           <Card.Title>{props.book.title}</Card.Title>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

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
          className={this.state.selected ? "bg-dark" : ""}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title className="truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
