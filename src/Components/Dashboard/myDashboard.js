import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Form, Button, Tabs, Tab } from "react-bootstrap";
import "./dashboard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
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
import Alerts from "./alerts";
import Claims from "./claims";
import MyTools from "./myTools";
import MyReports from "./myReports";
import ClientTable from './clientTable';
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function MyDashboard() {
  return (
    <div>
      <Container fluid>
        <Row>
          {/* left side dashbord */}
          <Col md={9} lg={9} sm={9}>
            {/* Premium count */}
            <Row>
              <Col md={3}>
                <div className="dashboard-count">
                  <h3>Submitted Annualized Permium</h3>
                  <h4 className="text-blue font-24">
                    <span>$</span>14,071,946
                  </h4>
                </div>
              </Col>
              <Col md={3}>
                <div className="dashboard-count">
                  <h3>Total Annualized Permium</h3>
                  <h4 className="text-orange font-24">
                    <span>$</span>14,071,946
                  </h4>
                </div>
              </Col>
              <Col md={2}>
                <div className="dashboard-count">
                  <h3>Quotes Started</h3>
                  <h4 className="text-blue font-24">10</h4>
                </div>
              </Col>
              <Col md={2}>
                <div className="dashboard-count">
                  <h3>Quotes Submitted</h3>
                  <h4 className="text-green font-24">5</h4>
                </div>
              </Col>
              <Col md={2}>
                <div className="dashboard-count">
                  <h3>Quotes Closed</h3>
                  <h4 className="text-red font-24">10</h4>
                </div>
              </Col>
            </Row>

            {/* Policies and next Premium Due */}
            <Row>
              <Col>
                <div className="dashboard-widget">
                  <h3 className="widget-heading">Policies</h3>
                </div>
              </Col>
              <Col>
                <div className="dashboard-widget">
                  <h3 className="widget-heading">Next Premiums Due</h3>
                </div>
              </Col>
            </Row>

            {/* My incentives and My commisions */}
            <Row>
              <Col>
                <div className="dashboard-widget">
                  <h3 className="widget-heading">My Incentives</h3>
                </div>
              </Col>
              <Col>
                <div className="dashboard-widget">
                  <h3 className="widget-heading">My Commisions</h3>
                </div>
              </Col>
            </Row>

            {/* My Workspace */}
            <Row>
              <Col>
                <div className="dashboard-widget">
                  <h3 className="widget-heading">My Workspace <span>...</span></h3>
                </div>
                <Row>
                  <Col>
                  <ClientTable/>
                  </Col>
                </Row>
                
              </Col>
            </Row>
          </Col>
          <Col md={3} lg={3} sm={3}>
            <Row>
              <Col>
                <Alerts />
              </Col>
            </Row>
            <Row>
              <Col>
                <Claims />
              </Col>
            </Row>
            <Row>
              <Col>
                <MyTools />
              </Col>
            </Row>
            <Row>
              <Col>
                <MyReports />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyDashboard;
