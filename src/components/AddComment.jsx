import { Component } from "react";
import { Form, Button } from "react-bootstrap";

// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzU1ZTUwMWZlODAwMTU2MGMyNGYiLCJpYXQiOjE2NzUzNDcyOTUsImV4cCI6MTY3NjU1Njg5NX0.n8RSjoic2mLlrAXoI7bG8-_6SPkY2bQl5P7xw-wS3C4"

const url = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };
  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzU1ZTUwMWZlODAwMTU2MGMyNGYiLCJpYXQiOjE2NzUzNDcyOTUsImV4cCI6MTY3NjU1Njg5NX0.n8RSjoic2mLlrAXoI7bG8-_6SPkY2bQl5P7xw-wS3C4",
        },
      });
      if (response.ok) {
        alert("Comment was sent!");
        console.log(this.props.asin);
        this.setState({
          comment: {
            comment: "",
            rate: 1,
            elementId: this.props.asin,
          },
        });
      } else {
        console.log("error while sending comment");
        alert("Something went wrong when sending comment!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Form onSubmit={this.sendComment}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Tell us your opinion."
            required
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>How many ⭐️?</Form.Label>
          <Form.Control
            as="select"
            required
            value={this.state.comment.rate}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
