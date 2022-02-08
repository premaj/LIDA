import React from "react";

import Form from 'react-bootstrap/Form'

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          className="text-black"
          placeholder="Enter your Username"
        />
      </Form.Group>
    </div>
  );
};

export default Step2;
