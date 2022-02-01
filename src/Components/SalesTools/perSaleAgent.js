import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import {
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link } from "react-router-dom";


function PerSaleAgent() {
  const [deathBenefitCoverage, setDeathBenefitCoverage] =
    React.useState(250000);
  const [targetCashValue, setTargetCashValue] = React.useState(200000);
  const [premiumAmount, setPremiumAmount] = React.useState(410);

  return (
    <div className="--lida-sales-tools-surveyQues">
      <p className="font-weight-bold">Application</p>
      <p className="text-info">Indexed Universal Life Product</p>
      <h6>Solication of this sale occuring</h6>
      <hr></hr>

      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="In Person"
            name="group1"
            type="radio"
            id="1"
          />
          <Form.Check
            inline
            label="Via Video Conferencing per virtual Sales Guidelines"
            name="group1"
            type="radio"
            id="2"
          />
        </div>
      </Form.Group>
      <p className="font-weight-bold">Specify Producer Information below</p >
      <p className="font-weight-bold">Instructions:</p>
      <h6>-Additional producer can be individual or entity</h6>
      <h6>-Please select upto 3 additional</h6>
      <h6>
        -For additional producer that is an entity, enter details in the
        Additional Producer(s)-Entity section Sum of Split % must be 100
      </h6>

      <p className="font-weight-bold">Primary Producer - Individual</p>
      <Form.Group as={Row}>
        {/* <div className="mb-3"> */}
          <Col xs="2">
            <Form.Label> &nbsp;Producer Id</Form.Label>
            <Form.Control size="sm" type="text" value="00055534" disabled className="text-dark"/>
          </Col>
          <Col xs="3">
            <Form.Label> &nbsp;Last Name</Form.Label>
            <Form.Control size="sm" type="text" value="Charles" disabled className="text-dark" />
          </Col>
          <Col xs="3">
            <Form.Label> &nbsp;First Name</Form.Label>
            <Form.Control size="sm" type="text" value="Mounica" disabled className="text-dark" />
          </Col>
          <Col xs="1">
            <Form.Label> &nbsp;MI</Form.Label>
            <Form.Control size="sm" type="text" disabled className="text-dark"/>
          </Col>
        {/* </div> */}
      </Form.Group>
      <Form.Group as={Row}>
        {/* <div className="mb-3"> */}
          <Col xs="2">
            <Form.Label className="font-weight-bold"> &nbsp;Phone No</Form.Label>
            <Form.Control size="sm" type="text" value="(222) 090-2323" disabled className="text-dark"/>
          </Col>
          <Col xs="3">
            <Form.Label> &nbsp;Email</Form.Label>
            <Form.Control size="sm" type="text" value="MOU*****LES@acme.com" disabled className="text-dark"/>
          </Col>
          <Col xs="1">
            <Form.Label> &nbsp;Split %</Form.Label>
            <Form.Control size="sm" type="text" value="50" disabled className="text-dark"/>
          </Col>
        {/* </div> */}
      </Form.Group>

      <p className="font-weight-bold">Agreement and Consent:I confirm, agree and consent that I:</p>
      <h6>-am the person whose name appears on the signature lines of the Insurance Application</h6>
      <h6>-have the technological ability to receive, open, read, rpint and retain all the Insurance 
          Application Documents and Illustration Documents, as applicable in the electronic form in which
          they will be delivered to me based on the above-stated computer hardware and software requirements</h6>
      <h6>
        -will electronically receive delivery of and sign, and electronically deliver to the company,all the Insurance
        Application and Illustration documents, As applicable, requiring my signatures and be bound by my electronic signatures thereon, and
      </h6>

      <Form.Check 
        type="checkbox"
        id="1"
        label="I agree to all the above terms and conditions of this consonent"
      />

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

export default PerSaleAgent;
