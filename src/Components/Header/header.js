import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./header.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBell,
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function Header() {
  return (
    <div>
      <div className="Header-top">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <h3>Agent Dashboard</h3>
              </Nav>
              <Nav>
                <Nav.Link href="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                  agent_support@acme.com
                </Nav.Link>
                <Nav.Link href="#">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  (212) 200-0000
                </Nav.Link>
                <Nav.Link href="#">
                  <FontAwesomeIcon icon={faBell} />
                </Nav.Link>

                <NavDropdown title="Mouses" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    (212) 200-0000
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Notification
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="Header-bottom">
        <ul>
          <li>
            <p>
              Welcome <b>mounica charles,</b> Your last login was 06/03/2021{" "}
              <br></br>
              what would you like to do today?
            </p>
          </li>
          <li>
            <InputGroup>
              <Button variant="outline-success">
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ marginTop: "-2px" }}
                />
              </Button>
              <FormControl
                placeholder="Search"
                aria-label=""
                aria-describedby="basic-addon2"
                isValid={true}
              />
            </InputGroup>
          </li>
          <li>
            <span className="group-btn">
              <a href="#" className="btn btn-warning btn-md">
                Generate quote{" "}
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
