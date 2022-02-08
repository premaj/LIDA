import React, { createContext, useState } from "react";

export const customizeDashboardContext = createContext();

export const CustomizeDashBoardProvider = (props) => {
  const initialState = {
    myDashboard: true,
    salesTool: true,
    renewals: true,
    myCommision: true,
    myCLients: true,
    reports: true,
    
  };
  const widgetsInitial = {
    policies: true,
    alerts: true,
    nextPremiumDue: true,
    myIncentives: true,
    myCommision: true,
    claims: true,
    myTools: true,
    myWorkspace: true,
    myReasearchArea: true,
    myReports: true,
  };
  const [dashboardTab, setDashboardTab] = useState(initialState);
  const [widgets, setWidget] = useState(widgetsInitial);
  return (
    <customizeDashboardContext.Provider
      value={{
        dashboardTab: dashboardTab,
        setDashboardTab: setDashboardTab,
        widgets: widgets,
        setWidget: setWidget,
      }}
    >
      {props.children}
    </customizeDashboardContext.Provider>
  );
};
