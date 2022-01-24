import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./index.css";

function SurveyQues() {
  return (
    <div className="--lida-sales-tools-surveyQues">
      <Form.Group>
        <Form.Label>1. &nbsp;Are you buying insurance for yourself?</Form.Label>

        <div className="--lida-survey-ques1">
          <Form.Check
            type={"radio"}
            label={`Yes`}
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />{" "}
          <Form.Check
            type={"radio"}
            label={`For a family member`}
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>2. &nbsp;Please tell us your name?</Form.Label>

        <div className="--lida-survey-ques1">
          <Form.Control size="sm" type="text" />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>3. &nbsp;What's your gender?</Form.Label>

        <div className="--lida-survey-ques1">
          <Form.Check
            type={"radio"}
            label={`Male`}
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />{" "}
          <Form.Check
            type={"radio"}
            label={`Female`}
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>4. &nbsp;What's your age?</Form.Label>

        <div className="--lida-survey-ques1">
          <Form.Range />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          5. &nbsp;How tall are you? Please enter your height
        </Form.Label>

        <div className="--lida-survey-ques1">
          <Form.Range />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>6. &nbsp;What would be your weight (lbs) be?</Form.Label>

        <div className="--lida-survey-ques1">
          <Form.Range />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>7. &nbsp;Please select your class?</Form.Label>

        <div className="--lida-survey-ques1">
          <Form.Check
            type={"radio"}
            label={`Preferred`}
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />{" "}
          <Form.Check
            type={"radio"}
            label={`Smoker`}
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            type={"radio"}
            label={`Non-Smoker`}
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>8. &nbsp;We'd like to know your health status?</Form.Label>

        <div className="--lida-survey-ques1">
          <Form.Check
            type={"radio"}
            label={`No History`}
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />{" "}
          <Form.Check
            type={"radio"}
            label={`Recent Surgeries`}
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            type={"radio"}
            label={`Health Complications`}
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
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
}

export default SurveyQues;
