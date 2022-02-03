import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function Alerts() {
  return (
    <div className="dashboard-alert">
      <h3 className="widget-heading">
        Alerts <span>...</span>
      </h3>
      {/* Premium */}
      <h4>Premium</h4>
      <Row className="border-bottom">        
        <Col md={8}>
          <p>Premium Due for Policy 669012001 on 04/24/2021</p>
        </Col>
        <Col>
          <Button className="track-btn">Track</Button>
        </Col>
      </Row>
      <Row className="border-bottom">        
        <Col md={8}>
          <p>Premium Due for Policy 669012001 on 04/24/2021</p>
        </Col>
        <Col>
          <Button className="track-btn">Track</Button>
        </Col>
      </Row>

      {/* Documents */}
      <h4>Documents</h4>
      <Row className="border-bottom">        
        <Col md={8}>
          <p>Custome to submit medical docs for Quote #!654321</p>
        </Col>
        <Col>
          <Button className="track-btn">Track</Button>
        </Col>
      </Row>

      {/* License */}
      <h4>License</h4>
      <Row className="border-bottom">        
        <Col md={8}>
          <p>License expiration date for KY:06/24/2021</p>
        </Col>
        <Col>
          <Button className="track-btn">Track</Button>
        </Col>
      </Row>

      <a href="#!">More Alerts</a>
    </div>
  );
}

export default Alerts;
