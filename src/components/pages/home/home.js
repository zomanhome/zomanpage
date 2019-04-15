import React from "react";
import { withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Alert variant="primary">Home page</Alert>
    </div>
  );
};

export default withRouter(Home);
