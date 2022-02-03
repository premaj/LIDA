import React, { useState } from "react";
import "./dashboard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  ButtonGroup,
  ButtonToolbar,
  Container,
  Col,
  Row,
  ToggleButton,
} from "react-bootstrap";

import jsonData from "../../table.json";

import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Alerts from "./alerts";
import Claims from "./claims";
import MyTools from "./myTools";
import MyReports from "./myReports";
import ClientTable from "./clientTable";
import MyIncentives from "./myIncentives";
import NextPremiumsDue from "../NextPremiumsDue";
import MyCommissions from "../MyCommissions";
import MyResearchArea from "./myResearchArea";
import Policy from "./policy";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

const tableData = [...jsonData];

function MyDashboard() {
  
  // buttonGroup variables defined
  const [checked, setChecked] = useState(false);
  const [buttonValue, setButtonValue] = useState("all");

  // handleButtonClick for filter data using button
  const buttonGroups = [
    { name: "All", value: "all" },
    { name: "Referred", value: "referred" },
    { name: "Inforced", value: "inforced" },
    { name: "Declined", value: "declined" },
  ];
  const handleButtonClick = (name) => {
    setButtonValue(name);
    console.log(name);
  };

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
                <div className="dashboard-widget min-height-380">
                  {/* <h3 className="widget-heading">Policies</h3> */}
                  <div>
                    <span className="--lida-dashboard-myincentives-header">
                      Policies
                    </span>
                    <span className="--lida-dashboard-myincentives-header-right">
                      ...
                    </span>
                  </div>
                  <Policy />
                </div>
              </Col>
              <Col>
                <div className="dashboard-widget min-height-380">
                  <NextPremiumsDue />
                </div>
              </Col>
            </Row>

            {/* My incentives and My commisions */}
            <Row>
              <Col>
                <div className="dashboard-widget min-height-380">
                  <div>
                    <span className="--lida-dashboard-myincentives-header">
                      My Incentives
                    </span>
                    <span className="--lida-dashboard-myincentives-header-right">
                      ...
                    </span>
                  </div>

                  <MyIncentives />
                </div>
              </Col>
              <Col>
                <div className="dashboard-widget min-height-380">
                  <MyCommissions />
                </div>
              </Col>
            </Row>

            {/* My Workspace */}
            <Row>
              <Col>
                <div className="dashboard-widget">
                  <h3 className="widget-heading">
                    My Workspace <span>...</span>
                  </h3>
                  <ButtonToolbar
                    className="mb-3"
                    aria-label="Buttons for filter table data"
                  >
                    <ButtonGroup>
                      {buttonGroups.map((item, index) => (
                        <ToggleButton
                          key={index}
                          id={`item-${index}`}
                          type="radio"
                          variant="outline-primary"
                          name={item.name}
                          value={item.value}
                          checked={buttonValue === item.value}
                          onChange={(e) =>
                            handleButtonClick(e.currentTarget.value)
                          }
                        >
                          {item.name}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                  </ButtonToolbar>
                </div>
                <Row>
                  <Col>
                    <ClientTable data={tableData} />
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
                <MyResearchArea />
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
