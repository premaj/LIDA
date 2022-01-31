import React, { useRef, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
  faEllipsisV,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
import Doc from "../../assets/images/Documents.png";
import Comment from "../../assets/images/Comments.png";
import Tooltips from "../Common/Pophover";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faPhoneAlt,
  faEllipsisV,
  faComment
);

function ClientTable() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = React.createRef();

  const handleClick = (event) => {
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
      },
      {
        "_id": "4",
        "Client": "Jhone Smith",
        "Client Contact": "John Smith",
        "Product": "Universal Life",
        "Start Date": "06/18/2021",
        "Policy ID": "669012001",
      },
    ];

  return (
    <div className="client-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Client</th>
            <th>Client Contact</th>
            <th>Product</th>
            <th>Start Date</th>
            <th>Policy ID</th>
            <th>Supporting Documents</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jhone Smith</td>
            <td>
              <a href="#!">John Smith</a>
            </td>
            <td>Universal Life</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td ref={ref}>
              <a href="#!" onClick={handleClick}>
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="new">New</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>Lisa Anderson</td>
            <td>
              <a href="#!">Lisa Anderson</a>
            </td>
            <td>Terms Life</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td ref={ref}>
              <a href="#!" onClick={handleClick}>
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="inprogress">In Progress</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>Kimberly Baker</td>
            <td>
              <a href="#!">Kimberly Baker</a>
            </td>
            <td>Fixed Annuity</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="hold">On Hold</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>John W</td>
            <td>
              <a href="#!">John Williams</a>
            </td>
            <td>Fixed Annuity</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="complete">Completed</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>Jhone Smith</td>
            <td>
              <a href="#!">John Smith</a>
            </td>
            <td>Universal Life</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="new">New</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>Lisa Anderson</td>
            <td>
              <a href="#!">Lisa Anderson</a>
            </td>
            <td>Terms Life</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="inprogress">In Progress</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>Kimberly Baker</td>
            <td>
              <a href="#!">Kimberly Baker</a>
            </td>
            <td>Fixed Annuity</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="hold">On Hold</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>John W</td>
            <td>
              <a href="#!">John Williams</a>
            </td>
            <td>Fixed Annuity</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="complete">Completed</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>Jhone Smith</td>
            <td>
              <a href="#!">John Smith</a>
            </td>
            <td>Universal Life</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="new">New</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>Lisa Anderson</td>
            <td>
              <a href="#!">Lisa Anderson</a>
            </td>
            <td>Terms Life</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="inprogress">In Progress</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>Kimberly Baker</td>
            <td>
              <a href="#!">Kimberly Baker</a>
            </td>
            <td>Fixed Annuity</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="hold">On Hold</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
          <tr>
            <td>John W</td>
            <td>
              <a href="#!">John Williams</a>
            </td>
            <td>Fixed Annuity</td>
            <td>04/16/2021</td>
            <td>
              <span>669012001</span>
            </td>
            <td>
              <a href="">
                <img src={Doc} alt="Document" />
              </a>
            </td>
            <td>
              <a href="">
                <img src={Comment} alt="Comment" />
              </a>
            </td>
            <td>
              <span className="complete">Completed</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faEllipsisV} />
            </td>
          </tr>
        </tbody>
      </Table>
        <Tooltips
          show={show}
          target={target}
          placement="bottom"
          ref={ref}
          containerPadding={20}
          title="Days 6 of 15"
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
    </div>
  );
}

export default ClientTable;
