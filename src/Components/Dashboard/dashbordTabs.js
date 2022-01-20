import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Form, Button, Tabs, Tab } from "react-bootstrap";
import "./dashboard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import SalesTools from "../SalesTools/salesTools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBell,
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import MyDashboard from "../Dashboard/myDashboard";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function DashboardTabs() {
  return (
    <div>
      <Tabs
        defaultActiveKey="My_Dashboard"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="My_Dashboard" title="My Dashboard">
          <Row className="margin-0">
            <Col>
              <MyDashboard />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="sales" title="Sales Tool">
          <Row className="margin-0">
            <Col>
              <SalesTools />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="renewals" title="Renewals"></Tab>
        <Tab eventKey="commission" title="My Commission"></Tab>
        <Tab eventKey="client" title="My Clients"></Tab>
        <Tab eventKey="reports" title="Reports"></Tab>
      </Tabs>
    </div>
  );
}

export default DashboardTabs;
