import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.arr.map((commentObj) => {
        console.log(commentObj.comment);
        return (
          <SingleComment
            commentText={commentObj.comment}
            commentRate={commentObj.rate}
            key={commentObj._id}
          />
        );
      })}
    </ListGroup>
  );
};
export default CommentsList;
