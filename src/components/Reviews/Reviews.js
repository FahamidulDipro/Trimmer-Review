import React from "react";
import { Card, Col } from "react-bootstrap";
const Reviews = (props) => {
  //   const { reviews } = props;
  const { picture, name, ratings, review } = props.review;
  return (
    <Col lg={3} style={{ margin: "150px 20px 20px 20px" }}>
      <Card
        style={{
          width: "20rem",
          padding: "20px",
        }}
        className="shadow-lg"
      >
        <Card.Img
          variant="top"
          src={picture}
          style={{
            height: "100px",
            width: "100px",
            marginLeft: "20px",
            borderRadius: "20px",
          }}
        />
        <Card.Body className="text-start">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{review}</Card.Text>
          <Card.Text>Ratings: {ratings}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Reviews;
