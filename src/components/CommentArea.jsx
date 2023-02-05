import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzU1ZTUwMWZlODAwMTU2MGMyNGYiLCJpYXQiOjE2NzUzNDcyOTUsImV4cCI6MTY3NjU1Njg5NX0.n8RSjoic2mLlrAXoI7bG8-_6SPkY2bQl5P7xw-wS3C4"

const url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  getComments = async () => {
    try {
      let response = await fetch(url + this.props.id, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzU1ZTUwMWZlODAwMTU2MGMyNGYiLCJpYXQiOjE2NzUzNDcyOTUsImV4cCI6MTY3NjU1Njg5NX0.n8RSjoic2mLlrAXoI7bG8-_6SPkY2bQl5P7xw-wS3C4",
        },
      });
      let commentsArr = await response.json();
      this.setState({ comments: commentsArr });
      console.log(commentsArr);
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <footer>
        <AddComment />
        <CommentsList arr={this.state.comments} />
      </footer>
    );
  }
}

export default CommentArea;
