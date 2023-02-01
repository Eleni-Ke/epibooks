import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

import fantasyItems from "../src/data/books/fantasy.json";
import BookList from "./components/BookList";
// import historyItems from "../data/books/history.json";
// import horrorItems from "../data/books/horror.json";
// import romanceItems from "../data/books/romance.json";
// import scifiItems from "../data/books/scifi.json";
// import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList bookArray={fantasyItems} />
      <MyFooter />
    </div>
  );
}

export default App;
