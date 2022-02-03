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
  InputGroup,
} from "react-bootstrap";
import "./header.css";
import * as Icons from "react-bootstrap-icons";
import profile from "../../assets/images/User.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/images/Logo.png';
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function Header() {
  return (
    <header>
      <div className="Header-top">
        <Navbar
          bg="white"
          expand="lg"
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <Container fluid className="ms-lg-4">
            <Navbar.Brand href="/">
              <img src={Logo} alt="Logo" className="lida-img-logo"/>
              <h3 className="d-inline-block align-top">AGENT DASHBOARD</h3>
            </Navbar.Brand>            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nabbar-container">
                <Nav.Link>
                  <Icons.Envelope
                    size={20}
                    className="text-primary"
                  ></Icons.Envelope>
                  agent_support@lida.com
                </Nav.Link>
              </Nav>
              <Nav className="nabbar-container">
                <Nav.Link>
                  <Icons.Telephone
                    size={20}
                    className="text-primary"
                  ></Icons.Telephone>
                  (212) 200-0000
                </Nav.Link>
              </Nav>
              <Nav className="nabbar-container ms-lg-4">
                <Nav.Link>
                  <Icons.Bell
                    size={20}
                    className="text-primary text-bold bi-type-bold"
                  ></Icons.Bell>
                  <Badge className="badge rounded-pill bg-danger m-minus">
                    9
                  </Badge>
                </Nav.Link>
              </Nav>
              <Nav className="nabbar-container">
                <Nav.Link eventKey={2} href="#!">
                  <NavDropdown title="Mouses" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#!">
                      Agent
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#!">
                      Notification
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#!"></NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link>
                  <img src={profile} atl="profile" className="text-primary" />
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
          <Col lg={5}>
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
          <Col lg={3}>
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
