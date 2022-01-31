import React, { useRef, useState } from "react";
import { Table } from "react-bootstrap";
import Tooltips from "../Common/Pophover";
import "./timeline.css";

const Timeline = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = React.createRef();

  const handlePophover = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const hidePophover = ()=>{
    setShow(!show);
  }

  
    // table data
    const tableDat = [
      {
        "_id": "1",
        "Client": "Jhone Smith",
        "Client Contact": "John Smith",
        "Product": "Universal Life",
        "Start Date": "06/18/2021",
        "Policy ID": "669012001",
      },
      {
        "_id": "2",
        "Client": "Jhone Smith",
        "Client Contact": "John Smith",
        "Product": "Universal Life",
        "Start Date": "06/18/2021",
        "Policy ID": "669012001",
      },
      {
        "_id": "3",
        "Client": "Jhone Smith",
        "Client Contact": "John Smith",
        "Product": "Universal Life",
        "Start Date": "06/18/2021",
        "Policy ID": "669012001",
      }
    ];

  return (
    <>
      <div className="dot-container">
        <h5 className="dot" ref={ref}>
          <button className="blue" onClick={handlePophover}>
            6
          </button>
          <div className="verticle-line"></div>
          <div className="horizantal-line w-100 first-line"></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
      <div className="dot-container">
        <h5>
          <button className="green">
            18
          </button>
          <div className="verticle-line"></div>
          <div
            className="horizantal-line w-100"
            style={{ marginLeft: "9px" }}
          ></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
      <div className="dot-container">
        <h5>
          <button className="red">
            12
          </button>
          <div className="verticle-line"></div>
          <div className="horizantal-line w-100"></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
      <div className="dot-container">
        <h5>
          <button className="dark-red">
            14
          </button>
          <div className="verticle-line"></div>
          <div className="horizantal-line w-13"></div>
        </h5>
        <div className="timeline-days">15 Days</div>
      </div>
      <Tooltips
          show={show}
          target={target}
          placement="bottom"
          ref={ref}
          containerPadding={20}
          title="Days 6 of 15"
          rootClose
          hidePophover={hidePophover}
        >
          <Table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Client Contact</th>
                <th>Product</th>
                <th>Start Date</th>
                <th>Policy ID</th>
              </tr>
            </thead>
            <tbody>
              {tableDat.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.Client}</td>
                    <td>
                      <a href="#!">{item["Client Contact"]}</a>
                    </td>
                    <td>{item.Product}</td>
                    <td>{item["Start Date"]}</td>
                    <td>
                      <div className="orange-bg">{item["Policy ID"]}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tooltips>
    </>
  );
};
export default Timeline;
