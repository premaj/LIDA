import React from "react";
import DashboardTabs from "../Dashboard/dashbordTabs";
import Header from "../Header/header";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-list">
        <DashboardTabs />
      </div>
    </div>
  );
}

export default Dashboard;
