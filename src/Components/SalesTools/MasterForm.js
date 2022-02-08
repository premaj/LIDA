import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MultiStepProgressBar from "./MultiStepProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Preview from "./Preview";

const MasterForm = () => {
  //state for steps
  const [step, setStep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setStep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setStep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const FindView = (step) => {
    switch (step) {
      // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (
          <StepOne
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      case 2:
        return (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      case 3:
        return (
          <StepThree
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      case 4:
        return (
          <StepFour
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      case 5:
        return <Preview values={formData} />;
      default:
        return <div></div>;
    }
  };

  return (
    <Card>
      <Card.Header className="cardHeader">
        <Row className="justify-content-around mx-auto">
          <Col className="d-flex justify-content-around">
            <Card.Title>
              Personal <br /> Information
            </Card.Title>
          </Col>
          <Col className="d-flex justify-content-around">
            <Card.Title>
              Financial <br /> Information
            </Card.Title>
          </Col>
          <Col className="d-flex justify-content-around">
            <Card.Title>
              Policy <br /> Riders
            </Card.Title>
          </Col>
          <Col className="d-flex justify-content-around">
            <Card.Title>Illustration</Card.Title>
          </Col>
        </Row>
        <Card.Title>
          <MultiStepProgressBar currentStep={step} />
        </Card.Title>
      </Card.Header>
      <Card.Body>{FindView(step)}</Card.Body>
    </Card>
  );
};
export default MasterForm;
