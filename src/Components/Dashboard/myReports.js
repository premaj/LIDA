import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBell,
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
  faSearch,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import MyDashboard from "../Dashboard/myDashboard";
import "./dashboard.css";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt,faArrowRight);

function MyReports() {
  return (
    <div className="dashboard-alert">
      <h3 className="widget-heading">
        My Reports <span>...</span>
      </h3>      
      <Row className="border-bottom">        
        <Col md={12}>
           <h4 className="mytools"><a href ='#'><span></span>Revenue Report YTD 2021 </a></h4>
        </Col>
      </Row>
      <Row className="border-bottom">        
        <Col md={12}>
           <h4 className="mytools"><a href ='#'><span></span>Commission Report 2020 </a></h4>
        </Col>
      </Row>
      <Row className="border-bottom">        
        <Col md={12}>
           <h4 className="mytools"><a href ='#'><span></span>What-If Scenarios for Incentives </a></h4>
        </Col>
      </Row>
      
      

      <a href="#">More Reports</a>
    </div>
  );
}

export default MyReports;
