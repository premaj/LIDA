import React from "react";
import "./index.css";
import { Row, Col, ProgressBar } from "react-bootstrap";
import Dollar from "../../assets/images/Dollar.png";
const MyCommissions = () => {
  return (
    <div className="commission">
      <Row>
        <Col>
          <h3 className="title">
            My Commissions <span>...</span>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <div class="d-flex align-items-center justify-content-center">
            <img src={Dollar} className="d-flex me-3" />
            <h4 className="subtitle">
              Upcoming Commission Payment 07/15/2021:{" "}
            </h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <p className="price">$3,500</p>
          </div>
        </Col>
      </Row>
      <Row
        lg={12}
        className="d-flex align-items-center justify-content-center"
        style={{ marginTop: "2.1875rem" }}
      >
        <Col lg={6}>
          <div className="align-items-center justify-content-center">
            <h4 className="subtitle">Year To Date Commission</h4>
            <ProgressBar variant="info" now={40} />
            <p className="price">$7,000</p>
          </div>
        </Col>
        <Col lg={6}>
          <Col className="ract ms-5">
            <div className="align-items-center justify-content-center">
              <h4 className="subtitle text-center">
                All Time <br />
                Commission
              </h4>
              <p className="price text-center">$21,000</p>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};
export default MyCommissions;
