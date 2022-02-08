import React from "react";
import Form from 'react-bootstrap/Form'

const Step4 = (props) => {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          className="text-black"
          placeholder="Enter your Name"
        />
      </Form.Group>
    </div>
  );
};

export default Step4;
