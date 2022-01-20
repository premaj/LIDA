import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Header/header";
import DashboardTabs from "../Dashboard/dashbordTabs";

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
