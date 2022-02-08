import React from "react";
import Form from "react-bootstrap/Form";

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          className="text-black"
          placeholder="Enter your Password"
        />
      </Form.Group>
    </div>
  );
};

export default Step3;
