import React from "react";
import { withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Test = () => {
  return <Alert variant="success">Test page</Alert>;
};

export default withRouter(Test);
