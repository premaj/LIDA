import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  faAngleLeft,
  faAngleRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "./index.css";
import RangeSlider from "react-bootstrap-range-slider";

function FinancialInformation() {
  const [deathBenefitCoverage, setDeathBenefitCoverage] = useState(0);
  const [targetCashValue, setsetTargetCashValueValue] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [targetDuration, setTargetDuration] = useState(0);

  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Group as={Row}>
        <Form.Label>1. &nbsp;Your Death Benefit Coverage</Form.Label>
        <Col xs="5">
          <RangeSlider
            value={deathBenefitCoverage}
            onChange={(e) => setDeathBenefitCoverage(e.target.value)}
            variant="success"
            min={0}
            max={1000000}
            step={10000}
          />
        </Col>
        {"$"}
        <Col xs="3">{deathBenefitCoverage}</Col>
        <Col xs="3">
          {deathBenefitCoverage > 0 ? (
            <span>
              <FontAwesomeIcon icon={faCheckCircle} size="lg" />
            </span>
          ) : null}
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label>2. &nbsp;What will be your Target Cash Value ?</Form.Label>

        <Col xs="5">
          <RangeSlider
            value={targetCashValue}
            onChange={(e) => setsetTargetCashValueValue(e.target.value)}
            variant="success"
            min={0}
            max={500000}
            step={10000}
          />
        </Col>
        {"$"}
        <Col xs="3" >{targetCashValue}</Col>
        <Col xs="3">
          {targetCashValue > 0 ? (
            <span>
              <FontAwesomeIcon icon={faCheckCircle} size="lg" />
            </span>
          ) : null}
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label>3. &nbsp;What is your Annual Income ?</Form.Label>

        <Col xs="5">
          <RangeSlider
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            variant="success"
            min={0}
            max={500000}
            step={10000}
          />
        </Col>
        {"$"}
        <Col xs="3">{annualIncome}</Col>
        <Col xs="3">
          {annualIncome > 0 ? (
            <span>
              <FontAwesomeIcon icon={faCheckCircle} size="lg" />
            </span>
          ) : null}
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label>
          4. &nbsp;What is target duration of the policy ?
        </Form.Label>

        <Col xs="5">
          <RangeSlider
            value={targetDuration}
            onChange={(e) => setTargetDuration(e.target.value)}
            variant="success"
            min={20}
            max={80}
            step={1}
          />
        </Col>
        {"$"}
        <Col xs="3">{targetDuration}</Col>
        <Col xs="3">
          {targetDuration > 0 ? (
            <span>
              <FontAwesomeIcon icon={faCheckCircle} size="lg" />
            </span>
          ) : null}
        </Col>
      </Form.Group>

      <div className="--lida-sales-btn-group-previous-next">
        <div className="--lida-sales-footer">
          <span className="group-btn">
            <a href="#" className="btn btn-warning btn-md">
              <span>
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>{" "}
              Previous
            </a>
          </span>
        </div>

        <div className="--lida-sales-footer">
          <span className="group-btn">
            <a href="#" className="btn btn-warning btn-md">
              Next{" "}
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

export default FinancialInformation;
