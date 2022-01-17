import React from "react";
import {
  Col,
  Container,
  Row,
  Badge,
  Button,
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
  InputGroup
} from "react-bootstrap";
import "./header.css";
import * as Icons from "react-bootstrap-icons";
import logo from '../../assets/images/logo.svg';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function Header() {
  return (
    <header>
      <div className="Header-top">
        <Navbar bg="white" expand="lg">
          <Container fluid className="mx-4">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-center me-5"
                alt="Agent Dashboard"
              />
              <h3 className="d-inline-block align-top">AGENT DASHBOARD</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link><Icons.Envelope size={25} className="text-primary mx-2"></Icons.Envelope>
                  agent_support@acme.com
                            </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link><Icons.Telephone size={25} className="text-primary mx-2"></Icons.Telephone>
                  (212) 200-0000
                            </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link>
                  <Icons.Bell size={25} className="text-primary"></Icons.Bell>
                  <Badge className="badge rounded-pill bg-danger m-minus">9</Badge>
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link eventKey={2} href="#!memes">
                  <NavDropdown title="Mouses" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#!action/3.2">
                      Agent
                                </NavDropdown.Item>
                    <NavDropdown.Item href="#!action/3.3">
                      Notification
                                </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#!action/3.4"></NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link><Icons.PersonCircle size={25} className="text-primary"></Icons.PersonCircle>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="Header-bottom">
        <Row className="Header-bottom-row">
          <Col lg={4} className="mt-2">
            <p>
              Welcome <b>mounica charles,</b> Your last login was 06/03/2021{" "}
              <br></br>
              what would you like to do today?
            </p>
          </Col>
          <Col lg={5} className="mt-2">
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
          </Col>
          <Col lg={3} className="mt-2">
            <span className="group-btn">
              <a href="#!" className="btn btn-warning btn-md">
                Generate quote{" "}
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </a>
            </span>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
