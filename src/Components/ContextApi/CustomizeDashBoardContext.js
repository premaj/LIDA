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
  const [dashboardTab, setDashboardTab] = useState(initialState);
  return (
    <customizeDashboardContext.Provider
      value={{ dashboardTab: dashboardTab, setDashboardTab: setDashboardTab }}
    >
        {props.children}
    </customizeDashboardContext.Provider>
  );
};
