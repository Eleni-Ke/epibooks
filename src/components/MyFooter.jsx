import { Col, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="container-fluid bg-dark text-white">
      <Row>
        <Col>Copyright blabla</Col>
        <Col className="icons">These will be icons</Col>
      </Row>
    </footer>
  );
};

export default MyFooter;
