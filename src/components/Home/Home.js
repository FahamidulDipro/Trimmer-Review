import { Button } from "bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useReviews from "../../Hooks/useReviews";
import trimmer from "../../images/trimmer.jpg";
import "./Home.css";
const Home = () => {
  const [reviews] = useReviews();
  return (
    <div className="mt-5 container">
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
      <Container fluid className="customer-review">
        <h1>Customer Reviews</h1>
        <button className="btn btn-primary mt-5">See All Reviews</button>
      </Container>
    </div>
  );
};

export default Home;
