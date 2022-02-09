import React from "react";
import * as Icons from "react-bootstrap-icons";
import "./index.css";
const Checkbox = (props) => {
  const { [props.icon]: Icon } = Icons;
  const { contextProviderData, contextProviderSetData } = props;

  // Checks the Values for particular field and returns the check value
  const checkedValue = () => {
    if (props.title === "My Dashboard") {
      return contextProviderData?.myDashboard;
    } else if (props.title === "Sales Tools") {
      return contextProviderData?.salesTool;
    } else if (props.title === "Renewals") {
      return contextProviderData?.renewals;
    } else if (props.title === "My Commissions") {
      return contextProviderData?.myCommision;
    } else if (props.title === "My Clients") {
      return contextProviderData?.myCLients;
    } else if (props.title === "Reports") {
      return contextProviderData?.reports;
    } else if (props.title === "Policies") {
      return contextProviderData?.policies;
    } else if (props.title === "Next Premium Due") {
      return contextProviderData?.nextPremiumDue;
    } else if (props.title === "Alerts") {
      return contextProviderData?.alerts;
    } else if (props.title === "Claims") {
      return contextProviderData?.claims;
    } else if (props.title === "My Incentives") {
      return contextProviderData?.myIncentives;
    } else if (props.title === "My Tools") {
      return contextProviderData?.myTools;
    } else if (props.title === "My Workspace") {
      return contextProviderData?.myWorkspace;
    } else if (props.title === "My Research Area") {
      return contextProviderData?.myReasearchArea;
    } else if (props.title === "My Reports") {
      return contextProviderData?.myReports;
    }
  };
  // handle checks and updates the values
  const handleCheck = (event) => {
    // console.log(`${props.title}-${event.target.checked}`);
    if (props.title === "My Dashboard") {
      contextProviderSetData({
        ...contextProviderData,
        myDashboard: event.target.checked,
      });
    } else if (props.title === "Sales Tools") {
      contextProviderSetData({
        ...contextProviderData,
        salesTool: event.target.checked,
      });
    } else if (props.title === "Renewals") {
      contextProviderSetData({
        ...contextProviderData,
        renewals: event.target.checked,
      });
    } else if (props.title === "My Commissions") {
      contextProviderSetData({
        ...contextProviderData,
        myCommision: event.target.checked,
      });
    } else if (props.title === "My Clients") {
      contextProviderSetData({
        ...contextProviderData,
        myCLients: event.target.checked,
      });
    } else if (props.title === "Reports") {
      contextProviderSetData({
        ...contextProviderData,
        reports: event.target.checked,
      });
    } else if (props.title === "Policies") {
      contextProviderSetData({
        ...contextProviderData,
        policies: event.target.checked,
      });
    } else if (props.title === "Next Premium Due") {
      contextProviderSetData({
        ...contextProviderData,
        nextPremiumDue: event.target.checked,
      });
    } else if (props.title === "Alerts") {
      contextProviderSetData({
        ...contextProviderData,
        alerts: event.target.checked,
      });
    } else if (props.title === "Claims") {
      contextProviderSetData({
        ...contextProviderData,
        claims: event.target.checked,
      });
    } else if (props.title === "My Incentives") {
      contextProviderSetData({
        ...contextProviderData,
        myIncentives: event.target.checked,
      });
    } else if (props.title === "My Tools") {
      contextProviderSetData({
        ...contextProviderData,
        myTools: event.target.checked,
      });
    } else if (props.title === "My Workspace") {
      contextProviderSetData({
        ...contextProviderData,
        myWorkspace: event.target.checked,
      });
    } else if (props.title === "My Research Area") {
      contextProviderSetData({
        ...contextProviderData,
        myReasearchArea: event.target.checked,
      });
    } else if (props.title === "My Reports") {
      contextProviderSetData({
        ...contextProviderData,
        myReports: event.target.checked,
      });
    }
  };
  return (
    <>
      <div className="check-box">
        <Icon></Icon>
        <label>{props.title}</label>
        <input type="checkbox" onClick={handleCheck} checked={checkedValue()} />
      </div>
    </>
  );
};
export default Checkbox;
