import React from "react";
import * as Icons from "react-bootstrap-icons";
import './index.css';
const Checkbox = props => {
  const { [props.icon]: Icon } = Icons;
  return (
    <>
      <div className="check-box">
        <Icon></Icon>
        <label>{props.title}</label>
        <input type="checkbox" checked={props.checked}/>
      </div>
    </>
  );
};
export default Checkbox;
