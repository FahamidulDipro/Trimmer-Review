import React from "react";
import { Card, Col } from "react-bootstrap";
const Reviews = (props) => {
  //   const { reviews } = props;
  const { picture, name, ratings, review } = props.review;
  return (
    <Col lg={3} style={{ marginTop: "200px" }}>
      <Card
        style={{
          width: "20rem",
          padding: "20px",
        }}
      >
        <Card.Img variant="top" src={picture} />
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
