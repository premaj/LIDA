import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Form, Accordion } from "react-bootstrap";
import {
  faAngleLeft,
  faAngleRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link } from "react-router-dom";
import RangeSlider from "react-bootstrap-range-slider";

function PreSaleInsured() {
  const [deathBenefitCoverage, setDeathBenefitCoverage] =
    React.useState(250000);
  const [targetCashValue, setTargetCashValue] = React.useState(200000);
  const [premiumAmount, setPremiumAmount] = React.useState(410);

  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Label> &nbsp;Owner Type</Form.Label>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Individual"
            name="group1"
            type="radio"
            id="1"
            checked
          />
          <Form.Check
            inline
            label="Corporate"
            name="group1"
            type="radio"
            id="2"
          />
        </div>
      </Form.Group>
      <p className="font-weight-bold">Amount Of Insurance:</p>
      <Col xs="3">
        <Form.Control
          size="sm"
          type="text"
          value="250000"
          disabled
          className="text-dark"
        />
      </Col>
      <hr></hr>
      <h6>
        Does the Primary Insured have any life insurance policies or annuity
        contracts in force or pending (excluding group life insurance provided
        by your employer)
      </h6>
      <p className="font-weight-bold text-body">Benefit Riders</p>
      <Form.Label>Death Benefit Option:</Form.Label>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Option A - Level"
            name="group1"
            type="radio"
            id="1"
            checked
          />

          <Form.Check
            inline
            label="Option B - Level"
            name="group1"
            type="radio"
            id="2"
          />
        </div>
      </Form.Group>

      <p className="font-weight-bold text-body">Optional Riders</p>
      <Form.Label> &nbsp;Accidental Death Benefit Rider:</Form.Label>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check inline label="Yes" name="group1" type="radio" id="1" />
          <Form.Check inline label="No" name="group1" type="radio" id="2" />
        </div>
      </Form.Group>
      <p className="font-weight-bold">Place of Birth:</p>
      <Form.Group as={Row}>
        <Col xs="3">
          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Select>
              <option>United States</option>
              <option>Germany</option>
              <option>France</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col xs="3">
          <Form.Group className="mb-3">
            <Form.Label>State (if United States)</Form.Label>
            <Form.Select>
              <option>CA</option>
              <option>NY</option>
              <option>WDC</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Form.Group>

      <p className="font-weight-bold text-body">Identifucation Information</p>
      <Form.Label> &nbsp;Type of Identification</Form.Label>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Driver's License"
            name="group1"
            type="radio"
            id="1"
            checked
          />
          <Form.Check
            inline
            label="State ID"
            name="group1"
            type="radio"
            id="2"
          />
          <Form.Check
            inline
            label="Passport"
            name="group1"
            type="radio"
            id="2"
          />
          <Form.Check
            inline
            label="Military ID"
            name="group1"
            type="radio"
            id="2"
          />
          <Form.Check
            inline
            label="Permanent Resident Card"
            name="group1"
            type="radio"
            id="2"
          />
          <Form.Check inline label="Other" name="group1" type="radio" id="2" />
        </div>
      </Form.Group>
      <p className="font-weight-bold">Identification Number</p>
      <Form.Group as={Row}>
        <Col xs="3">
          <Form.Label> &nbsp;Type of Identification</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            value="B743658700055534"
            disabled
            className="text-dark"
          />
        </Col>
        <Col xs="4">
          <Form.Label> &nbsp;Country of Issue</Form.Label>

          <Form.Group className="mb-3">
            <Form.Select>
              <option>United States</option>
              <option>Germany</option>
              <option>France</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Form.Group>

      <p className="font-weight-bold text-body">Employment</p>
      <Form.Label> &nbsp;Are you currently employed:</Form.Label>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type="radio"
            id="1"
            checked
          />
          <Form.Check inline label="No" name="group1" type="radio" id="2" />
        </div>
      </Form.Group>

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

export default PreSaleInsured;
