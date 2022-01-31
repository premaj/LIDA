import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Logo from "../../assets/images/Logo.png";
import "./Login.css";
function Login() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-offset-5 col-md-5 col-sm-12 col-sm-offset-1 text-center">
          <div className="form-login">
            <img src={Logo} alt="Logo" className="lida-logo" />
            <h1 className="lida-title">Life & Annuities</h1>
            <h3 className="lida-subtitle">Agent Dashboard</h3>
            <Row className="mt-5">
              <Col>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Remember Me" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <span>
                        <a href="#!">Forgot Password</a>
                      </span>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>

            <div className="wrapper">
              <span className="group-btn">
                <a href="dashboard" className="btn btn-warning btn-md">
                  login <i className="fa fa-sign-in"></i>
                </a>
              </span>
            </div>

            <Row>
              <Col>
                <div className="wrapper getanappoinment">
                  <span className="group-btn">
                    <a href="#" className="btn btn-light btn-md">
                      Get an appointment <i className="fa fa-sign-in"></i>
                    </a>
                  </span>
                </div>
                <div>
                  <span>
                    <a href="#">Request Username and Password</a>
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
