import React from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import Timeline from "./timeline";
const NextPremiumsDue = () => {
  return (
    <Row>
      <Col>
        <h3 className="premium-title">
          Next Premiums Due <span>...</span>
        </h3>
        <Row>
          <Col className="w-100 dot-wrapper d-flex" lg={12}>
            <Timeline />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default NextPremiumsDue;
