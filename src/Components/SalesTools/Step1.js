import React from "react";
import Form from "react-bootstrap/Form";

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Group controlId="buyingInsuranceForYourself">
        <Form.Label>1. Are you buying insurance for yourself?</Form.Label>
          <Form.Check
            type={"radio"}
            label={`Yes`}
            name="buyingInsuranceForYourself"
            id="buyingInsuranceForYourself"
          />{" "}
          <Form.Check
            type={"radio"}
            label={`For a family member`}
            name="buyingInsuranceForYourself"
            id="buyingInsuranceForYourself"
          />
       </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>2. Please tell us your name?</Form.Label>
        <div className="--lida-survey-ques1">
          <Form.Control size="sm" type="text" name="name" />
        </div>
      </Form.Group>
      <Form.Group controlId="gender">
        <Form.Label>3. What's your gender?</Form.Label>
        <div className="--lida-survey-ques1">
          <Form.Check
            type={"radio"}
            label={`Male`}
            name="gender"
          />{" "}
          <Form.Check
            type={"radio"}
            label={`Female`}
            name="gender"
          />
        </div>
      </Form.Group>
      <Form.Group controlId="age">
        <Form.Label>4. What's your age?</Form.Label>
        <div className="--lida-survey-ques1">
          <Form.Range name="age"/>
        </div>
      </Form.Group>
      <Form.Group controlId="height">
        <Form.Label>5. How tall are you? Please enter your height</Form.Label>
        <div className="--lida-survey-ques1">
          <Form.Range name="height" />
        </div>
      </Form.Group>
      <Form.Group controlId="weight">
        <Form.Label>6. What would be your weight (lbs) be?</Form.Label>
        <div className="--lida-survey-ques1">
          <Form.Range name="weight" />
        </div>
      </Form.Group>
      <Form.Group controlId="smokingclass">
        <Form.Label>7. Please select your class?</Form.Label>
        <div className="--lida-survey-ques1">
          <Form.Check
            type={"radio"}
            label={`Preferred`}
            name="smokingclass"
          />{" "}
          <Form.Check
            type={"radio"}
            label={`Smoker`}
            name="smokingclass"
          />
          <Form.Check
            type={"radio"}
            label={`Non-Smoker`}
            name="smokingclass"
          />
        </div>
      </Form.Group>
      <Form.Group controlId="healthstatus">
        <Form.Label>8. We'd like to know your health status?</Form.Label>
        <div className="--lida-survey-ques1">
          <Form.Check
            type={"radio"}
            label={`No History`}
            name="healthstatus"
            id="healthstatus"
          />{" "}
          <Form.Check
            type={"radio"}
            label={`Recent Surgeries`}
            name="healthstatus"
            id="healthstatus"
          />
          <Form.Check
            type={"radio"}
            label={`Health Complications`}
            name="healthstatus"
            id="healthstatus"
          />
          <Form.Check
            type={"radio"}
            label={`On going medications`}
            name="formHorizontalRadios"
            id="formHorizontalRadios4"
          />
        </div>
      </Form.Group>
    </div>
  );
};

export default Step1;
