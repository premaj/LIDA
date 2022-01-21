import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Table} from "react-bootstrap";
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
import Doc from '../../assets/images/Documents.png';
import Comment from '../../assets/images/Comments.png';
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faPhoneAlt,faEllipsisV,faComment);

function ClientTable(){
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
      <td><a href='#!'>John Smith</a></td>
      <td>Universal Life</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="new">New</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>Lisa Anderson</td>
      <td><a href='#!'>Lisa Anderson</a></td>
      <td>Terms Life</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="inprogress">In Progress</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>Kimberly Baker</td>
      <td><a href='#!'>Kimberly Baker</a></td>
      <td>Fixed Annuity</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="hold">On Hold</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>John W</td>
      <td><a href='#!'>John Williams</a></td>
      <td>Fixed Annuity</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="complete">Completed</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>Jhone Smith</td>
      <td><a href='#!'>John Smith</a></td>
      <td>Universal Life</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="new">New</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>Lisa Anderson</td>
      <td><a href='#!'>Lisa Anderson</a></td>
      <td>Terms Life</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="inprogress">In Progress</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>Kimberly Baker</td>
      <td><a href='#!'>Kimberly Baker</a></td>
      <td>Fixed Annuity</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="hold">On Hold</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>John W</td>
      <td><a href='#!'>John Williams</a></td>
      <td>Fixed Annuity</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="complete">Completed</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>Jhone Smith</td>
      <td><a href='#!'>John Smith</a></td>
      <td>Universal Life</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="new">New</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>Lisa Anderson</td>
      <td><a href='#!'>Lisa Anderson</a></td>
      <td>Terms Life</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="inprogress">In Progress</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>Kimberly Baker</td>
      <td><a href='#!'>Kimberly Baker</a></td>
      <td>Fixed Annuity</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="hold">On Hold</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    <tr>
      <td>John W</td>
      <td><a href='#!'>John Williams</a></td>
      <td>Fixed Annuity</td>
      <td>04/16/2021</td>
      <td><span>669012001</span></td>
      <td><a href=''><img src={Doc} alt ='Document'/></a></td>
      <td><a href=''><img src={Comment} alt ='Comment'/></a></td>
      <td><span className="complete">Completed</span></td>
      <td><FontAwesomeIcon icon={faEllipsisV}/></td>
    </tr>
    
  </tbody>
</Table>
    </div>
  );
}

export default ClientTable;
