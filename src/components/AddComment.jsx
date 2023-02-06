import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rating: "",
  };
  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Tell us your opinion."
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" min="1" max="5" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
