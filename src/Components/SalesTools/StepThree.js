import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="text-black"
                style={{ border: error ? "2px solid red" : "" }}
                type="email"
                placeholder="email"
                defaultValue={values.email}
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button className="btn btn-warning btn-md" onClick={prevStep}>
                <span>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </span>
                Previous
              </Button>

              <Button className="btn btn-warning btn-md" type="submit">
                next
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;
