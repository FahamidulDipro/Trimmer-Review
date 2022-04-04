import React from "react";

const About = () => {
  return (
    <div
      style={{ marginTop: "200px" }}
      className="container text-start p-5 shadow-lg"
    >
      <h1 style={{ color: "peru" }}>About Us</h1>
      <hr />
      <p style={{ fontSize: "20px" }}>
        <b>Trimmer Review</b> is a SPA(Single Page Application) built with
        React. The app contains user reviews and ratings of a trimmer. The app
        also contains a dashboard where some data are shown in different charts.
        The app contains a blog page. React router and Context API were used to
        build this SPA.
      </p>
    </div>
  );
};

export default About;
