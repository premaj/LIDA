import { Button } from "bootstrap";
import React from "react";
import { Container, Row, Col, Form, Breadcrumb, Anchor } from "react-bootstrap";
import "./index.css";

function SurveyTop() {
  return (
    <div className="--lida-sales-tools-surveyTop">
      <div className="--lida-sales-tab-header">
        <div>
          <span>Personal Information</span>
        </div>
        <div>
          {" "}
          <span>Financial Information</span>{" "}
        </div>
        <div>
          {" "}
          <span>Policy Riders</span>{" "}
        </div>
        <div>
          <span>Illustration</span>
        </div>
      </div>
      <div className="--lida-sales-tab">
        <div>
          <span>1</span>
        </div>{" "}
        <div>
          <span>2</span>
        </div>{" "}
        <div>
          <span>3</span>
        </div>{" "}
        <div>
          <span>4</span>
        </div>
      </div>
    </div>
  );
}

export default SurveyTop;
