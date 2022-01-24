import React from "react";
import Chart from "react-apexcharts";
import { Col, Row, ProgressBar } from "react-bootstrap";

import "./dashboard.css";

function MyIncentives() {
  return (
    <div className="--lida-dashboard-myincentives">
      <div>
        <span className="--lida-dashboard-myincentives-header">
          My Incentives
        </span>
        <span className="--lida-dashboard-myincentives-header-right">...</span>
      </div>
      <div className="--lida-dashboard-myincentives-body">
        <Row>
          <Col className="--myincentives-body-left" lg={5} md={5}>
            <div>
              <Chart
                series={[64, 42, 81, 47]}
                options={{
                  dataLabels: {
                    enabled: false,
                  },
                  legend: {
                    show: false,
                  },
                  colors: ["#52B69A", "#B5E48C", "#1E6091", "#34A0A4"],
                }}
                type="donut"
                width="270"
              />
            </div>
            <div>
              <div>15</div>
              <div>Points</div>
            </div>
          </Col>
          <Col className="--myincentives-body-right">
            <div>
              <span>Short by dollar $60,000</span>
            </div>
            <div>
              <span>
                <ProgressBar now={56.2} className="progress-custom" />
              </span>
              <span className="--myincentives-body-right-span">
                Target 25 points
              </span>
            </div>
            <div>
              <Row>
                <Col lg={1} md={1}>
                  <div className="list-circle l1"></div>
                </Col>
                <Col>Universal Life</Col>
                <Col lg={2} md={2}>
                  6
                </Col>
              </Row>
              <Row>
                <Col lg={1} md={1}>
                  <div className="list-circle l2"></div>
                </Col>
                <Col>Indexed Universal Life</Col>
                <Col lg={2} md={2}>
                  2
                </Col>
              </Row>
              <Row>
                <Col lg={1} md={1}>
                  <div className="list-circle l3"></div>
                </Col>
                <Col>Term Life</Col>
                <Col lg={2} md={2}>
                  4
                </Col>
              </Row>
              <Row>
                <Col lg={1} md={1}>
                  <div className="list-circle l4"></div>
                </Col>
                <Col>Fixed Annuity</Col>
                <Col lg={2} md={2}>
                  4
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MyIncentives;
