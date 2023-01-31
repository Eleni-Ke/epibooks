import { Jumbotron, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>This is the Epibook Book Nook!</h1>
        </Container>
      </Jumbotron>
      <p>
        Welcome to the Epibook Book Nook. We hope that you can find something
        that you like!
      </p>
    </div>
  );
};

export default Welcome;
