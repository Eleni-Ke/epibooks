import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

import fantasyItems from "../src/data/books/fantasy.json";
import BookList from "./components/BookList";
import { Component } from "react";
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
        <BookList
          bookArray={fantasyItems}
          selectedBookFromApp={this.state.currentBook}
          changeSelectedBookFromApp={this.changeSelectedBook}
        />
        <MyFooter />
      </div>
    );
  }
}

export default App;
