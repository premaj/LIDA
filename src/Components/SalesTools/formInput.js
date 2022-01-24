import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SurveyTop from "./surveyTop";
import SurveyQues from "./surveyQues";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function FormInput() {
  return (
    <div className="--lida-sales-tools-forms">
      <div className="--lida-sales-tools-inner-forms">
        <div>
          <SurveyTop />
        </div>
        <div>
          <SurveyQues />
        </div>
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
  );
}

export default FormInput;
