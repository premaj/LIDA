import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  faAngleLeft,
  faAngleRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link } from "react-router-dom";

function PolicyRider() {
  const [data, setData] = useState({
    lapse: "",
    terminal: "",
    overloan: "",
    maturity: "",
    chronic: "",
    distribution: "",
  });

  //   const handelInput = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     // data[name]?setData({...data,name:""}):
  //     // setData({...data,name:value})
  //     setData({ ...data, name: value });
  //     console.log(data);
  //   };
  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Label>
        {" "}
        &nbsp;You have the option of choosing 2 off the below, riders that would
        be added to your Total Premium
      </Form.Label>

      <Form.Group as={Row}>
        <Col xs="4">
          <Form.Check
            label="Lapse Protecttion Rider"
            name="lapse"
            value="Associated premium will be in addition to actual premium - $250"
            onChange={(e) => {
              data.lapse
                ? setData({ ...data, lapse: "" })
                : setData({ ...data, lapse: e.target.value });
            }}
          />
        </Col>
        <Col xs="6">{data.lapse}</Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col xs="4">
          <Form.Check
            label="Terminal Illness Rider"
            name="terminal"
            value="Associated premium will be in addition to actual premium - $300"
            onChange={(e) => {
              data.terminal
                ? setData({ ...data, terminal: "" })
                : setData({ ...data, terminal: e.target.value });
            }}
          />
        </Col>
        <Col xs="6">{data.terminal}</Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col xs="4">
          <Form.Check
            label="OverLoan Protection Rider"
            name="overloan"
            value="Associated premium will be in addition to actual premium - $350"
            onChange={(e) => {
              data.overloan
                ? setData({ ...data, overloan: "" })
                : setData({ ...data, overloan: e.target.value });
            }}
          />
        </Col>
        <Col xs="6">{data.overloan}</Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col xs="4">
          <Form.Check
            label="Chronic Illness Rider"
            name="chronic"
            value="Associated premium will be in addition to actual premium - $400"
            onChange={(e) => {
              data.chronic
                ? setData({ ...data, chronic: "" })
                : setData({ ...data, chronic: e.target.value });
            }}
          />
        </Col>
        <Col xs="6">{data.chronic}</Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col xs="4">
          <Form.Check
            label="Maturity Extention Rider"
            name="maturity"
            value="Associated premium will be in addition to actual premium - $450"
            onChange={(e) => {
              data.maturity
                ? setData({ ...data, maturity: "" })
                : setData({ ...data, maturity: e.target.value });
            }}
          />
        </Col>
        <Col xs="6">{data.maturity}</Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col xs="4">
          <Form.Check
            label="Distribution Withdrawals Rider"
            name="distribution"
            value="Associated premium will be in addition to actual premium - $500"
            onChange={(e) => {
              data.distribution
                ? setData({ ...data, distribution: "" })
                : setData({ ...data, distribution: e.target.value });
            }}
          />
        </Col>
        <Col xs="6">{data.distribution}</Col>
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

export default PolicyRider;
