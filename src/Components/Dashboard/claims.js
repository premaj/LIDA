import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {  Col, Row, Form } from "react-bootstrap";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function Claims() {
  return (
    <div className="dashboard-alert">
      <h3 className="widget-heading">
        Claims <span>...</span>
      </h3>

      {/* Claims */}

      <Row className="border-bottom">
        <Col>
          <div>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                For
              </Form.Label>
              <Col sm="4">
                <Form.Select aria-label="Default select example">
                  <option>2021</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </div>
          <div className="total-claims">
            Total Claims <span>3</span>
          </div>
          <div className="active-claims">
            Active Claims <span>1</span>
          </div>
          <div className="total-amount">
            Total amount<br>
            </br>
            <span>$250000</span>
          </div>
        </Col>
      </Row>

      {/* <a href="#!">More Alerts</a> */}
    </div>
  );
}

export default Claims;
