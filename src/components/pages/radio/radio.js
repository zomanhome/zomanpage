import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";

import "./radio.scss";

const dnb = ["s149592"]; // , "s16743", "s233151", "s54061"
const _srcBase = "https://tunein.com/embed/player/";
const _style = { width: "100%", height: "100px" };

const ListRadio = ({ stations }) => {
  return stations.map(station => (
    <iframe
      key={station}
      title={station}
      src={`${_srcBase}+${station}`}
      style={_style}
      scrolling="no"
      frameBorder="0"
    />
  ));
};

class Radio extends Component {
  render() {
    return (
      <div className="radio">
        <Alert variant="danger">Radio page</Alert>
        <div>
          <ListRadio stations={dnb} />
        </div>
      </div>
    );
  }
}

export default withRouter(Radio);
