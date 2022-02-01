import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col, Form, Accordion, Badge, } from "react-bootstrap";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import iconFeatherPhone from "../../assets/images/Icon feather-phone.png";
import "./index.css";
import { Link } from "react-router-dom";
import RangeSlider from "react-bootstrap-range-slider";

function Illutration() {
  const [deathBenefitCoverage, setDeathBenefitCoverage] =
    React.useState(250000);
  const [targetCashValue, setTargetCashValue] = React.useState(200000);
  const [premiumAmount, setPremiumAmount] = React.useState(410);

  return (
    <div className="--lida-sales-tools-surveyQues">
      <h5>Recommended Illustration of Amanda Brown</h5>
      <h6>
        <span className="text-primary">Indexed Universal Life Product</span>
        <span>
          <img src={iconFeatherPhone} alt="icon-feather"></img>
        </span>
        |
        <span>
          <img src={iconFeatherPhone} alt="icon-feather"></img>
        </span>
        |
        <span>
          <img src={iconFeatherPhone} alt="icon-feather"></img>
        </span>
      </h6>

      <Form.Group as={Row}>
        <Col xs="3">
          <Form.Label> &nbsp;Death Benefit Coverage</Form.Label>
          <RangeSlider
            value={deathBenefitCoverage}
            // onChange={(e) => setsetTargetCashValueValue(e.target.value)}
            variant="secondary"
            min={0}
            max={500000}
            step={10000}
            tooltipLabel={(currentValue) => `$${currentValue}`}
            tooltip="on"
          />
        </Col>
        <Col xs="3">
          <Form.Label> &nbsp;Target Cash Value</Form.Label>
          <RangeSlider
            value={targetCashValue}
            // onChange={(e) => setsetTargetCashValueValue(e.target.value)}
            variant="secondary"
            min={0}
            max={500000}
            step={10000}
            tooltipLabel={(currentValue) => `$${currentValue}`}
            tooltip="on"
          />
        </Col>
        <Col xs="3">
          <Form.Label> &nbsp;Premium Amount</Form.Label>
          <RangeSlider
            value={premiumAmount}
            // onChange={(e) => setsetTargetCashValueValue(e.target.value)}
            variant="secondary"
            min={0}
            max={1000}
            step={1}
            tooltipLabel={(currentValue) => `$${currentValue}`}
            tooltip="on"
          />
        </Col>
      </Form.Group>

      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <bold>Quick Summary with Key Insights</bold>
          </Accordion.Header>
          <Accordion.Body>
           Quick Summary with Key Insights
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Death Benefit Summary</Accordion.Header>
          <Accordion.Body>
            Death Benifit Summary
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Historical Performance Summary</Accordion.Header>
          <Accordion.Body>
            <Form.Label>
              {" "}
              &nbsp;Average 10-year Indexed Interest Rates
            </Form.Label>
            <Form.Group as={Row}>
              <Col xs="3">
                <Badge bg="info"><h3>Minimum</h3><h2>5.72 %</h2></Badge>
              </Col>
              <Col xs="3">
                <Badge bg="info"><h3>Maximum</h3><h2>6.42 %</h2></Badge>
              </Col>
            </Form.Group>
            <Form.Label>
              {" "}
              &nbsp;Performance Summary
            </Form.Label>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Riders</Accordion.Header>
          <Accordion.Body>
            Riders
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Other Information</Accordion.Header>
          <Accordion.Body>
            Other Information
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="--lida-sales-btn-group-previous-next">
        <div className="--lida-sales-footer">
          <span className="group-btn">
            <Link to="/finance">
              <a href="#" className="btn btn-warning btn-md">
                <span>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </span>{" "}
                Previous
              </a>
            </Link>
          </span>
        </div>

        <div className="--lida-sales-footer">
          <span className="group-btn">
            <a href="#" className="btn btn-warning btn-md">
              SIGN & SUBMIT{" "}
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Illutration;
