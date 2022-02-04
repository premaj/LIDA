import React from "react";
import { Overlay, Popover } from "react-bootstrap";
import './index.css';
const Tooltips = React.forwardRef((props, ref) => (
  <Overlay
    show={props.show}
    target={props.target}
    placement="top"
    containerPadding={20}
    rootClose={true}
  >
    <Popover id="popover-contained" ref={ref} className="popover-container">
      <Popover.Header as="h3">{props.title}
        <button type="button" className="btn-close" aria-label="Close" onClick={props.hidePophover}></button>
      </Popover.Header>
      <Popover.Body>{props.children}</Popover.Body>
    </Popover>
  </Overlay>
));

export default Tooltips;
