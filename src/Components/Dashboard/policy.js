import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { PolicyContext } from "../ContextApi/PolicyDataProvider";
import { Col, Row, ProgressBar } from "react-bootstrap";

import "./dashboard.css";

function Policy() {
  const contextpolicy = useContext(PolicyContext);

  console.log(contextpolicy.policy);

  
  var options = {
    colors: ["#52B69A", "#B5E48C", "#1E6091", "#34A0A4"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: true,
      showForSingleSeries: true,

      position: "bottom",
      horizontalAlign: "center",
      markers: {
        width: 15,
        height: 15,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 15,
        customHTML: function () {
          return '<div className="legend-circles" style=" width:9px;border-radius:10px;height: 9px !important;margin:3px 5px 3px 3px; background-color: white !important;"></div>';
        },
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
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
      {/* <div>
        <span className="--lida-dashboard-myincentives-header">Policies</span>
        <span className="--lida-dashboard-myincentives-header-right">...</span>
      </div> */}
      <div className="--lida-dashboard-myincentives-body">
        {" "}
        <Chart
          series={[
            {
              name: contextpolicy.policy[0].policyName,
              data: contextpolicy.policy[0].Data,
              fillColor: "#52B69A",
            },
            {
              name: contextpolicy.policy[1].policyName,
              data: contextpolicy.policy[1].Data,
            },
            {
              name: contextpolicy.policy[2].policyName,
              data: contextpolicy.policy[2].Data,
            },
            {
              name: contextpolicy.policy[3].policyName,
              data: contextpolicy.policy[3].Data,
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
