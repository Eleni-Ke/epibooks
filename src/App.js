import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

import fantasyItems from "../src/data/books/fantasy.json";
import BookList from "./components/BookList";
import { Component } from "react";
import CommentArea from "./components/CommentArea";
import { Container } from "react-bootstrap";
// import historyItems from "../data/books/history.json";
// import horrorItems from "../data/books/horror.json";
// import romanceItems from "../data/books/romance.json";
// import scifiItems from "../data/books/scifi.json";
// import AllTheBooks from "./components/AllTheBooks";

class App extends Component {
  state = {
    currentBook: "",
  };
  changeSelectedBook = (elementClicked) => {
    this.setState({ currentBook: elementClicked });
    console.log(this.state.currentBook);
  };
  render() {
    return (
      <div>
        <MyNav />
        <Welcome />
        {/* <AllTheBooks /> */}
        <Container fluid className="mainSection">
          <BookList
            bookArray={fantasyItems}
            selectedBookFromApp={this.state.currentBook}
            changeSelectedBookFromApp={this.changeSelectedBook}
            className="leftSection"
          />
          {this.state.currentBook === "" ? (
            <div className="rightSection infoMessage">
              Please select a book to see the comments.
            </div>
          ) : (
            <CommentArea
              book={this.state.currentBook}
              id={this.state.currentBook.asin}
              className="rightSection"
            />
          )}
        </Container>

        <MyFooter />
      </div>
    );
  }
}

export default App;
