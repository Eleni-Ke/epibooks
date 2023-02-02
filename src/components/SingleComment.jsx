import { Card } from "react-bootstrap";

const SingleComment = (props) => {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> {props.commentText} </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Epicode</cite>
            {props.commentRate}/5 ⭐️
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    // <div>
    //   <ListGroupItem>{props.commentText}</ListGroupItem>
    //   <ListGroupItem>{props.commentRate}</ListGroupItem>
    // </div>
  );
};

export default SingleComment;
