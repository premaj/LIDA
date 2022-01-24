import React from "react";
import "./timeline.css";
const Timeline = () => {

  return (
    <>
      <div className="dot-container">
        <h5 className="dot blue">
          <span>6</span>
          <div className="verticle-line"></div>
          <div className="horizantal-line w-100 first-line"></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
      <div className="dot-container">
        <h5 className="green">
          <span>18</span>
          <div className="verticle-line"></div>
          <div
            className="horizantal-line w-100"
            style={{ marginLeft: "9px" }}
          ></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
      <div className="dot-container">
        <h5 className="dot red">
          <span>12</span>
          <div className="verticle-line"></div>
          <div className="horizantal-line w-100"></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
      <div className="dot-container">
        <h5 className="dot red">
          <span>12</span>
          <div className="verticle-line"></div>
          <div className="horizantal-line w-100"></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
      <div className="dot-container">
        <h5 className="dot dark-red">
          <span>15</span>
          <div className="verticle-line"></div>
          <div className="horizantal-line w-13"></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
    </>
  );
};
export default Timeline;
