import React, { useState,useContext } from "react";
import { Col, Row, Button, Tabs, Tab } from "react-bootstrap";
import "./dashboard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import SalesTools from "../SalesTools/salesTools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "react-bootstrap-icons";
import { customizeDashboardContext } from "../ContextApi/CustomizeDashBoardContext";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import MyDashboard from "../Dashboard/myDashboard";
import Popup from "../Common/Popup";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);
function DashboardTabs() {
  const [modalCustomize, setModalCustomize] = useState(false);
  const dashboardCustomizeContext = useContext(customizeDashboardContext);
  const customizeDashboard = dashboardCustomizeContext.dashboardTab;
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
        {customizeDashboard.myDashboard && (
          <Tab
            eventKey="My_Dashboard"
            title={
              <>
                <Icons.PieChartFill
                  color="text-primary"
                  className="me-1"
                  size={20}
                />{" "}
                My Dashboard
              </>
            }
          >
            <Row className="margin-0">
              <Col>
                <i className="tabs-icon"></i>
                <MyDashboard />
              </Col>
            </Row>
          </Tab>
        )}
        {customizeDashboard.salesTool && (
          <Tab
            eventKey="sales"
            title={
              <>
                <Icons.BriefcaseFill className="me-1" size={20} /> Sales Tool
              </>
            }
          >
            <Row className="margin-0">
              <Col>
                <SalesTools />
              </Col>
            </Row>
          </Tab>
        )}
        {customizeDashboard.renewals && (
          <Tab
            eventKey="renewals"
            title={
              <>
                <Icons.UmbrellaFill className="me-1" size={20} /> Renewals
              </>
            }
          ></Tab>
        )}
        {customizeDashboard.myCommision && (
          <Tab
            eventKey="commission"
            title={
              <>
                <Icons.CurrencyDollar className="me-1" size={20} /> My
                Commission
              </>
            }
          ></Tab>
        )}
        {customizeDashboard.myCLients && (
          <Tab
            eventKey="client"
            title={
              <>
                <Icons.StarFill className="me-1" size={20} /> My Clients
              </>
            }
          ></Tab>
        )}
        {customizeDashboard.reports && (
          <Tab
            eventKey="reports"
            title={
              <>
                <Icons.FileEarmarkTextFill className="me-1" size={20} /> Reports
              </>
            }
          ></Tab>
        )}
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
