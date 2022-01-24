import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FormInput from "./formInput";
import "./index.css";

function SalesTools() {
  return (
    <div className="--lida-sales-tools">
      <Container fluid>
        <Row className="--lida-sales-tools-top">
          <Col>
            <div className="--lida-sales-tools-top-left">Quote</div>
          </Col>
          <Col>
            <div className="--lida-sales-tools-top-right">
              <span className="--lida-sales-tools-prod">
                {" "}
                <span>Product </span>
                <Form.Select>
                  <option>Indexed Universal Life Insurance</option>
                </Form.Select>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <FormInput></FormInput>
        </Row>
      </Container>
    </div>
  );
}

export default SalesTools;
