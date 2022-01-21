import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Button, Col, Row,Tabs,Tab } from "react-bootstrap";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
import img1 from '../../assets/images/Image1.png';
import img2 from '../../assets/images/Image 2.png';
import img3 from '../../assets/images/Image 3.png';


library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function MyResearchArea() {
  return (
    <div className="dashboard-alert">
      <h3 className="widget-heading">
        My Research Area <span>...</span>
      </h3>
     
      <Row className="">        
        <Col md={12} className="padding-0 myresearcharea-list">
        <Tabs
        defaultActiveKey="CompanyNews"
        transition={false}
        id="noanim-tab-example"
        className="myresearcharea"
      >
        <Tab eventKey="CompanyNews" title="Company News" >
          <Row className="margin-0 border-bottom">
            <Col md={3}>
              <img src={img1} alt="img1"/>
            </Col>
            <Col>
            <h3>New Product Launch</h3>
            </Col>
          </Row>
          <Row className="margin-0 border-bottom">
          <Col md={3}>
              <img src={img2} alt="img2"/>
            </Col>
            <Col>
            <h3>Upcoming Training Program</h3>
            </Col>
          </Row>
          <Row className="margin-0 border-bottom">
          <Col md={3}>
              <img src={img3} alt="img3"/>
            </Col>
            <Col>
            <h3>Company Q2 Results Review</h3>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="Trade" title="Trade Publications"></Tab>
        
      </Tabs>
        </Col>
        
      </Row>
     

      <a href="#!">More Alerts</a>
    </div>
  );
}

export default MyResearchArea;
