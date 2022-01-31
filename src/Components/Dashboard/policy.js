import React from "react";
import Chart from "react-apexcharts";
import { Col, Row, ProgressBar } from "react-bootstrap";

import "./dashboard.css";

function Policy() {
  var options = {
    colors: ["#52B69A", "#B5E48C", "#1E6091", "#34A0A4"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    chart: {
      type: "bar",
      height: 200,
      stacked: true,

      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
      fillColor: ["#52B69A", "#B5E48C", "#1E6091", "#34A0A4"],
    },

    plotOptions: {
      bar: {
        horizontal: false,

        distributed: false,
      },
    },
    xaxis: {
      type: "text",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      position: "bottom",
      offsetY: 40,
    },
    fill: {
      color: ["#52B69A", "#B5E48C", "#1E6091", "#34A0A4"],
      opacity: 1,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: false,
      },
    },
  };
  return (
    <div className="--lida-dashboard-myincentives">
      <div>
        <span className="--lida-dashboard-myincentives-header">Policies</span>
        <span className="--lida-dashboard-myincentives-header-right">...</span>
      </div>
      <div className="--lida-dashboard-myincentives-body">
        {" "}
        <Chart
          series={[
            {
              name: "PRODUCT A",
              data: [44, 55, 41, 67, 22, 0, 0, 0, 0, 0, 0, 0, 0],
              fillColor: "#52B69A",
            },
            {
              name: "PRODUCT B",
              data: [13, 23, 20, 8, 13, 0, 0, 0, 0, 0, 0, 0, 0],
            },
            {
              name: "PRODUCT C",
              data: [11, 17, 15, 15, 21, 0, 0, 0, 0, 0, 0, 0, 0],
            },
            {
              name: "PRODUCT D",
              data: [21, 7, 25, 13, 22, 0, 0, 0, 0, 0, 0, 0, 0],
            },
          ]}
          options={options}
          type="bar"
          width="420"
        />
      </div>
    </div>
  );
}

export default Policy;
