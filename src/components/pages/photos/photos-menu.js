import React from "react";
import { Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faAngleDown, faPlus);

const PhotosMenu = () => {
  const onClick = () => {
    const maxScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    window.scrollTo(0, maxScroll);
  };

  return (
    <React.Fragment>
      <Nav variant="pills">
        <LinkContainer exact to="/photos">
          <Nav.Link>Photos</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/favorites">
          <Nav.Link>Favorites</Nav.Link>
        </LinkContainer>
        <Button variant="outline-secondary" onClick={onClick}>
          <FontAwesomeIcon icon="angle-down" />
        </Button>
      </Nav>
    </React.Fragment>
  );
};

export default PhotosMenu;
