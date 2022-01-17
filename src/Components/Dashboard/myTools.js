import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt, faArrowRight);

function MyTools() {
  return (
    <div className="dashboard-alert">
      <h3 className="widget-heading">
        My Tools <span>...</span>
      </h3>
      <Row className="border-bottom">
        <Col md={12}>
          <h4 className="mytools"><a href='#!'>Need Analysis <span><FontAwesomeIcon icon={faArrowRight} /></span></a></h4>
        </Col>
      </Row>
      <Row className="border-bottom">
        <Col md={12}>
          <h4 className="mytools"><a href='#!'>Retirement Calculator <span><FontAwesomeIcon icon={faArrowRight} /></span></a></h4>
        </Col>
      </Row>
      <Row className="border-bottom">
        <Col md={12}>
          <h4 className="mytools"><a href='#!'>Life Insurence Calculator <span><FontAwesomeIcon icon={faArrowRight} /></span></a></h4>
        </Col>
      </Row>
      <Row className="border-bottom">
        <Col md={12}>
          <h4 className="mytools"><a href='#!'>Plan Comparison <span><FontAwesomeIcon icon={faArrowRight} /></span></a></h4>
        </Col>
      </Row>

      <a href="#!">More Tools</a>
    </div>
  );
}

export default MyTools;
