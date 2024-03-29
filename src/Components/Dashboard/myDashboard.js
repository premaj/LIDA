import React, { useState, useContext } from "react";
import "./dashboard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import * as Icons from "react-bootstrap-icons";
import {
  ButtonGroup,
  ButtonToolbar,
  Container,
  Col,
  Row,
  ToggleButton,
  InputGroup,
  FormControl,
  Form,
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
import { PolicyProvider } from "../ContextApi/PolicyDataProvider";
import { customizeDashboardContext } from "../ContextApi/CustomizeDashBoardContext";
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt);

function MyDashboard() {
  // table inital data
  const [tableValue, setTableValue] = useState([...jsonData]);
  const dashBoardWidget = useContext(customizeDashboardContext);
  // buttonGroup variables defined
  const [checked, setChecked] = useState(true);

  const [buttonValue, setButtonValue] = useState("All");
  //select by year filter for policy
  const [policyYear, SetPolicyYear] = useState("2021");

  // filter data onclick search button
  const [searchTerm, setSearchTerm] = React.useState("");

  // handleButtonClick for filter data using button
  const buttonGroups = [
    { name: "All", value: "All" },
    { name: "Referred", value: "Referred" },
    { name: "Inforced", value: "Inforced" },
    { name: "Declined", value: "Declined" },
  ];

  const handleButtonClick = (name) => {
    setButtonValue(name);
    FilterTabledata(name);
  };

  const FilterTabledata = (name, filterKeyword) => {
    if (name === "All" && (!filterKeyword || filterKeyword.trim() === "")) {
      return tableValue;
    } else if (
      name === "Referred" &&
      (!filterKeyword || filterKeyword.trim() === "")
    ) {
      const filterItem = tableValue.filter((item) => {
        return item.Status === "New";
      });
      return filterItem;
    } else if (
      name === "Inforced" &&
      (!filterKeyword || filterKeyword.trim() === "")
    ) {
      const filterItem = tableValue.filter((item) => {
        return item.Status === "Complete";
      });
      return filterItem;
    } else if (
      name === "Declined" &&
      (!filterKeyword || filterKeyword.trim() === "")
    ) {
      const filterItem = tableValue.filter((item) => {
        return item.Status === "On Hold";
      });
      return filterItem;
    } else if (filterKeyword !== "") {
      console.log(filterKeyword);
      return tableValue.filter((item) => {
        return item.Client.toLowerCase().includes(filterKeyword.toLowerCase());
      });
    }
  };

  const PolicyYearOnChange = (event) => {
    SetPolicyYear(event.target.value);
  };
  const handleSearch = (event) => {
    if (event !== "") {
      setSearchTerm(event.target.value);
    }
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
              {dashBoardWidget.widgets.policies && (
                <Col>
                  <div className="dashboard-widget min-height-380">
                    {/* <h3 className="widget-heading">Policies</h3> */}
                    <div>
                      <span className="--lida-dashboard-myincentives-header">
                        Policies
                      </span>

                      <span className="--lida-dashboard-myincentives-header-right">
                        <span className="policy-header-right-text">For</span>
                        <span style={{ marginRight: "1.0rem" }}>
                          <select onChange={PolicyYearOnChange}>
                            <option value="2021" selected>
                              2021
                            </option>
                            <option value="2022">2022</option>
                          </select>
                        </span>
                        <span>...</span>
                      </span>
                    </div>
                    <PolicyProvider>
                      <Policy policyYear={policyYear} />
                    </PolicyProvider>
                  </div>
                </Col>
              )}
              {dashBoardWidget.widgets.nextPremiumDue && (
                <Col>
                  <div className="dashboard-widget min-height-380">
                    <NextPremiumsDue />
                  </div>
                </Col>
              )}
            </Row>

            {/* My incentives and My commisions */}
            <Row>
              {dashBoardWidget.widgets.myIncentives && (
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
              )}
              {dashBoardWidget.widgets.myCommision && (
                <Col>
                  <div className="dashboard-widget min-height-380">
                    <MyCommissions />
                  </div>
                </Col>
              )}
            </Row>

            {/* My Workspace */}
            <Row>
              {dashBoardWidget.widgets.myWorkspace && (
                <Col>
                  <div className="dashboard-widget">
                    <h3 className="widget-heading">
                      My Workspace <span>...</span>
                    </h3>
                    <ButtonToolbar className="justify-content-between mt-4">
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
                            className="filter-btn-width"
                          >
                            {item.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                      <InputGroup>
                        <FormControl
                          type="text"
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                        <InputGroup.Text id="btnGroupAddon" className="orange">
                          <Icons.Search className="ms-1" size={24} />
                        </InputGroup.Text>
                      </InputGroup>
                      <div className="pagination-box">
                        {/* <span className="pagination-text">15</span> */}
                        <Form.Select className="pagination-text">
                          <option value="10" selected>
                            10
                          </option>
                          <option value="15" selected>
                            15
                          </option>
                          <option value="20" selected>
                            20
                          </option>
                        </Form.Select>
                        <span>of 45 records</span>
                      </div>
                    </ButtonToolbar>
                  </div>
                  <Row>
                    <Col>
                      <ClientTable
                        data={FilterTabledata(buttonValue, searchTerm)}
                      />
                    </Col>
                  </Row>
                </Col>
              )}
            </Row>
          </Col>
          <Col md={3} lg={3} sm={3}>
            <Row>
              {dashBoardWidget.widgets.alerts && (
                <Col>
                  <Alerts />
                </Col>
              )}
            </Row>
            <Row>
              {dashBoardWidget.widgets.claims && (
                <Col>
                  <Claims />
                </Col>
              )}
            </Row>
            <Row>
              {dashBoardWidget.widgets.myTools && (
                <Col>
                  <MyTools />
                </Col>
              )}
            </Row>
            <Row>
              {dashBoardWidget.widgets.myReasearchArea && (
                <Col>
                  <MyResearchArea />
                </Col>
              )}
            </Row>
            <Row>
              {dashBoardWidget.widgets.myReports && (
                <Col>
                  <MyReports />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyDashboard;
