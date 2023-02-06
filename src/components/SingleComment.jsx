import { Card, Button } from "react-bootstrap";

// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzU1ZTUwMWZlODAwMTU2MGMyNGYiLCJpYXQiOjE2NzUzNDcyOTUsImV4cCI6MTY3NjU1Njg5NX0.n8RSjoic2mLlrAXoI7bG8-_6SPkY2bQl5P7xw-wS3C4"

const url = "https://striveschool-api.herokuapp.com/api/comments/";

const SingleComment = (props) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(url + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzU1ZTUwMWZlODAwMTU2MGMyNGYiLCJpYXQiOjE2NzUzNDcyOTUsImV4cCI6MTY3NjU1Njg5NX0.n8RSjoic2mLlrAXoI7bG8-_6SPkY2bQl5P7xw-wS3C4",
        },
      });
      if (response.ok) {
        alert("Comment deleted");
      } else {
        alert("There has been an error!");
      }
    } catch (error) {
      alert("There has been an error while deleting...");
    }
  };
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            {props.commentText}{" "}
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => deleteComment(props.comment._id)}
            >
              Delete
            </Button>
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Epicode</cite>
            {props.commentRate}/5 ⭐️
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default SingleComment;
