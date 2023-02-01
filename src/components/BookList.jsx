import { Component } from "react";
import { Container, Row, Form, InputGroup } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: {
      word: "",
    },
  };
  render() {
    return (
      <Container fluid>
        <InputGroup>
          <InputGroup.Text>Search</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="..."
            value={this.state.search.word}
            onChange={(e) => {
              console.log("letter inputted!", e.target.value);
              this.setState({
                search: {
                  word: e.target.value,
                },
              });
            }}
          />
        </InputGroup>
        {this.state.search.word === "" ? (
          <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
            {this.props.bookArray.map((fantasyBook) => {
              return <SingleBook book={fantasyBook} key={fantasyBook.asin} />;
            })}
          </Row>
        ) : (
          <Row className="row-cols-3 row-cols-md-4 row-cols-lg-6">
            {this.props.bookArray.map((fantasyBook) => {
              return (
                fantasyBook.title
                  .toLocaleLowerCase()
                  .includes(this.state.search.word.toLocaleLowerCase()) && (
                  <SingleBook book={fantasyBook} key={fantasyBook.asin} />
                )
              );
            })}
          </Row>
        )}
      </Container>
    );
  }
}

export default BookList;
