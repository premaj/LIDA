import React from "react";
import DashboardTabs from "../Dashboard/dashbordTabs";
import Header from "../Header/header";
import { CustomizeDashBoardProvider } from "../ContextApi/CustomizeDashBoardContext";
function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-list">
        <CustomizeDashBoardProvider>
          <DashboardTabs />
        </CustomizeDashBoardProvider>
      </div>
    </div>
  );
}

export default Dashboard;
