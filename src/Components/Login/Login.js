import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-offset-5 col-md-5 col-sm-12 col-sm-offset-1 text-center">
          <div className="form-login">
            <h1>
              <span className="lida-logo">LIDA</span>
            </h1>
            <h1 className="text-white">
              <b>Life & Annuities</b>
              <br></br>
              <span>Agent Dashboard</span>
            </h1>
            <Row>
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
                <Link to={"/dashboard"} className="btn btn-warning btn-md">
                  Login <i className="fa fa-sign-in"></i>
                </Link>
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
