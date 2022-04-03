import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReviewContext } from "../../App";
import useReviews from "../../Hooks/useReviews";
import trimmer from "../../images/trimmer.jpg";
import Reviews from "../Reviews/Reviews";
import "./Home.css";
const Home = () => {
  const reviews = useContext(ReviewContext);

  return (
    <div className="container margin-top">
      <Container fluid>
        <Row>
          <Col md={6} sm={12}>
            <h1 className="text-start p-3">
              The Best Beard Trimmer
              <br />
              <span className="colored-heading">
                Ultra sharp with Awesome Build Quality
              </span>
            </h1>
          </Col>
          <Col md={6} sm={12}>
            <img src={trimmer} alt="trimmer" className="rounded" />
          </Col>
        </Row>
      </Container>

      {/* Customer Review Section */}
      <Container fluid className="margin-top">
        <h1>Customer Reviews</h1>
        <Container>
          <Row>
            {reviews
              .map((review) => (
                <Reviews key={review.id} review={review}></Reviews>
              ))
              .slice(0, 3)}
          </Row>
        </Container>

        <button className="btn btn-primary my-5">
          <Link to={"/reviews"} className="text-decoration-none text-light">
            See All Reviews
          </Link>
        </button>
      </Container>
    </div>
  );
};

export default Home;
