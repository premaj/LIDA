import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SurveyTop from "./surveyTop";
import SurveyQues from "./surveyQues";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FinancialInformation from "./financialInformation";
import PolicyRider from "./policyRider";
import Illustration from "./illustration";
import PerSaleAgent from "./perSaleAgent";
import PreSaleInsured from "./preSaledInsured";
import PreSaleInsuredHistory from "./preSaleInsuredHistory";
import Finalize from "./finalize";

function FormInput() {
  return (
    <div className="--lida-sales-tools-forms">
      <div className="--lida-sales-tools-inner-forms">
        <div>
          <SurveyTop />
        </div>
        <div>
          <SurveyQues />
          <FinancialInformation />
          <PolicyRider />
          <Illustration />
          <PerSaleAgent />
          <PreSaleInsured />
          <PreSaleInsuredHistory />
          <Finalize />
          <Switch>
            <Route exact path="/" component={SurveyQues} />
            <Route exact path="/finance" component={FinancialInformation} />
            <Route exact path="/policyRider" component={PolicyRider} />
            {/* <Route exact path="/illustrayion" component={} /> */}
          </Switch>
          
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
