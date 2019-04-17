import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faImages,
  faBroadcastTower,
  faBomb
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.scss";
import logo from "./logo.png";

library.add(faHome, faImages, faBroadcastTower, faBomb);

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="24"
          height="24"
          className="d-inline-block align-top"
        />
        {` ZOMAN`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <LinkContainer exact to="/">
            <Nav.Link>
              <FontAwesomeIcon icon="home" />
              {` Home`}
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/test">
            <Nav.Link>Test</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Services" id="services-dropdown">
            <LinkContainer to="/radio">
              <NavDropdown.Item>
                <FontAwesomeIcon icon="broadcast-tower" />
                {` Radio`}
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/photos">
              <NavDropdown.Item>
                <FontAwesomeIcon icon="images" />
                {` Photos`}
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
