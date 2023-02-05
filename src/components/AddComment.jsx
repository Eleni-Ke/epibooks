import { Form, Button } from "react-bootstrap";

const AddComment = () => {
  return (
    <Form on>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Tell us your opinion." />
      </Form.Group>
      <Form.Group>
        <Form.Control type="number" pattern="[1-5]*" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
