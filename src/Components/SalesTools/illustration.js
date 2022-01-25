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

function Illutration() {
 
  return (
    <div className="--lida-sales-tools-surveyQues">
        <h3>Hello</h3>
      
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
