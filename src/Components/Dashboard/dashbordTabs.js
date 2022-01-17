import React, { useState } from "react";
import { Col, Row,  Button, Tabs, Tab } from "react-bootstrap";
import "./dashboard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import MyDashboard from "../Dashboard/myDashboard";
import Popup from "../Common/Popup";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function DashboardTabs() {
  const [modalCustomize, setModalCustomize] = useState(false);
  return (
    <div>
      {/* Customize Dashboard Button Click to open popup */}
      <Button
        variant="secondary"
        className="btn-custom btn-right"
        onClick={() => setModalCustomize(true)}
      >
        CUSTOMIZE
      </Button>
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
        <Tab eventKey="sales" title="Sales Tool"></Tab>
        <Tab eventKey="renewals" title="Renewals"></Tab>
        <Tab eventKey="commission" title="My Commission"></Tab>
        <Tab eventKey="client" title="My Clients"></Tab>
        <Tab eventKey="reports" title="Reports"></Tab>
      </Tabs>
      {/* Customize Dashboard Popup Component */}
      <Popup
        name="Customize Dashboard"
        show={modalCustomize}
        onHide={() => setModalCustomize(false)}
      />
    </div>
  );
}
export default DashboardTabs;
