import React from "react";
import Form from 'react-bootstrap/Form'

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          className="text-black"
          placeholder="Enter your Email"
        />
      </Form.Group>
    </div>
  );
};

export default Step1;
