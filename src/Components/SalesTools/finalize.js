import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Form, Accordion, Badge } from "react-bootstrap";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link } from "react-router-dom";

function Finalize() {
  return (
    <div className="--lida-sales-tools-surveyQues">
      <p className="font-weight-bold">Summary</p>
      <hr></hr>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>Pre Sale Agent</strong>
          </Accordion.Header>
          <Accordion.Body>Quick Summary with Key Insights</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>Pre Sale Insured</strong>
          </Accordion.Header>
          <Accordion.Body>Death Benifit Summary</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <strong>Pre Sale Insured History</strong>
          </Accordion.Header>
          <Accordion.Body>
            <Form.Label>
              {" "}
              &nbsp;Average 10-year Indexed Interest Rates
            </Form.Label>
            <Form.Group as={Row}>
              <Col xs="3">
                <Badge bg="info">
                  <h3>Minimum</h3>
                  <h2>5.72 %</h2>
                </Badge>
              </Col>
              <Col xs="3">
                <Badge bg="info">
                  <h3>Maximum</h3>
                  <h2>6.42 %</h2>
                </Badge>
              </Col>
            </Form.Group>
            <Form.Label> &nbsp;Performance Summary</Form.Label>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <strong>Signatures</strong>
          </Accordion.Header>
          <Accordion.Body>Riders</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Finalize;
