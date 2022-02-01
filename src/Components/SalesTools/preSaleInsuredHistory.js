import React from "react";
import {
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "./index.css";

function PreSaleInsuredHistory() {

  return (
    <div className="--lida-sales-tools-surveyQues">
      <p className="font-weight-bold">Statement of Intent</p>
      <hr></hr>
      <h6>
        It is ACME Life Insurance Company's(the Company) policy that life
        insurance should only be purchased to provide protection to those with
        an insurable interest in the life (lives) of te insured(s). The Company
        will not knowingly participate in life insurance sales motivated by a
        possible sale of life insurance contracts to a secondary market or
        participation of investors in life insurance death benefit or annuity
        benefits.
      </h6>
      <br></br>
      <h6>
        1.Is the Owner and / or any proposed insured financing or refinancing a
        mortage and/or home equity loan or contemplating the use of any kind of
        mortae financing stratey in connection with the purchase or of the
        payment of premiums on this life insurance policy?
      </h6>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type="radio"
            id="1"
            checked
          />
          <Form.Check inline label="No" name="group1" type="radio" id="2" />
        </div>
      </Form.Group>

      <h6>
        2.Will the Owner and / or any proposed insured borrow money to pay the
        premium for thr life insurance being applied for or have someone else
        pay these premiums in return for assigning part or all of the policy
        values to someone else?
      </h6>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type="radio"
            id="1"
            checked
          />
          <Form.Check inline label="No" name="group1" type="radio" id="2" />
        </div>
      </Form.Group>
      <h6>
        3.Has the Owner and / or any proposed insured ever had or currently have
        any life insurance or annually benefit that has been sold or assigned to
        a life settlement, viatical or secondary market provider?
      </h6>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type="radio"
            id="1"
            checked
          />
          <Form.Check inline label="No" name="group1" type="radio" id="2" />
        </div>
      </Form.Group>

      <p className="font-weight-bold">Personal History Questions</p>
      <p className="font-weight-bold">Primary Insured</p>
      <Form.Group as={Row}>
        <Form.Label>Height</Form.Label>
        <Form.Group as={Row}>
          <Col xs="2">
            <Form.Group className="mb-3">
              <Form.Select>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs="2">
            <Form.Group className="mb-3">
              <Form.Select>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Form.Group>

        <Form.Label>Weight</Form.Label>
        <Col xs="3">
          <Form.Group className="mb-3">
            <Form.Select>
              <option>100-150</option>
              <option>151-200</option>
              <option>201-250</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Form.Group>

      <p className="font-weight-bold">
        Have you ever had any insurance application declined, postponed or
        rescinded, or been offered rated or modified life insurance or been
        refused renewal Or reinstatement?
      </p>

      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type="radio"
            id="1"
            checked
          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type="radio"
            id="2"
            checked
          />
        </div>
      </Form.Group>

      <p className="font-weight-bold">
        3.In last five years,have you had your driver's license suspended or
        revoked, or pleaded guilty or been convicted of any of the following:
        (check all tat apply)
      </p>
      <Form.Group>
        <Form.Check label="None" name="lapse" checked />

        <Form.Check
          label="Driver's License suspension or revocation"
          name="terminal"
          disabled
        />

        <Form.Check
          label="Reckless driving or drivin under the influence of alcohol or drugs (DUI/DWI)"
          name="terminal"
          disabled
        />

        <Form.Check label="Felony" name="terminal" disabled />
      </Form.Group>

      <p className="font-weight-bold">Medical History Questions</p>
      <p className="font-weight-bold">Primary Insured</p>
      <p className="font-weight-bold">
        1.In the last 10 years, have you ever been diagonised, recieved
        treatment, or been advised to seek treatment by a member of te medical
        profession for any of the followin (Check all that apply):
      </p>
      <Form.Check label="No" name="terminal" checked />

      <p className="font-weight-bold">
        2.In the last five years, hahah medical professional recommended you ave
        surgery, a procedure or dianostic testin not yet completed (except those
        related to uman immunodeficiency Virus (Aids Virus)?
      </p>
      <Form.Group as={Row}>
        <div className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type="radio"
            id="1"
            checked
          />

          <Form.Check
            inline
            label="No"
            name="group1"
            type="radio"
            checked
            id="2"
          />
        </div>
      </Form.Group>

      <p className="font-weight-bold">
        3.In the last 12 months, have you used tobacco or nicotine substitute in
        any form?(Ceck all tat apply):
      </p>

      <Form.Group as={Row}>
        <Col xs="1">
          <Form.Check label="No" name="terminal" checked />
        </Col>
        <Col xs="2">
          <Form.Check label="Cigarettes" name="terminal" disabled />
        </Col>
        <Col xs="2">
          <Form.Check label="Pipes" name="terminal" disabled />
        </Col>
        <Col xs="2">
          <Form.Check label="Chewing tobacco" name="terminal" disabled />
        </Col>
        <Col xs="2">
          <Form.Check label="Snuff" name="terminal" disabled />
        </Col>
        <Col xs="3">
          <Form.Check label="Electronic Cigarretes" name="terminal" disabled />
        </Col>
        <Col xs="3">
          <Form.Check label="Vaporizer(Vape)" name="terminal" disabled />
        </Col>
        <Col xs="3">
          <Form.Check
            label="Nicotine gum or patches"
            name="terminal"
            disabled
          />
        </Col>
      </Form.Group>
      <Form.Group>
        <h6>
          <strong>
            Please verify the submitted responses on the previous pages.
          </strong>
        
        <p>
          <strong>By clicking the acknowledement box, I attest that:</strong>
        </p>
        <p>
          <strong>
            1.I haves asked the questions contained in this application of te
            proposed Insured(s) and Owner and duly recorded te answers.
          </strong>
        </p>
        <p>
          <strong>
            2.To te best of my knowledge there is nothing affecting the
            insurability of any proposed Insured(s) as stated in this
            application.
          </strong>
        </p>
        <p>
          <strong>
            The responses will be final and used to determine the insured's
            eligibility for this product. No further edits will be allowed once
            submitted.
          </strong>
        </p>
        </h6>

        <Col xs="3">
          <Form.Check label="Acknowledgement" name="terminal" checked />
        </Col>
      </Form.Group>

      <p className="font-weight-bold">
        To achieve our goal of delivering rapid underwriting decisions, all
        orders must be submitted within 15 days of te application start date.
      </p>
    </div>
  );
}

export default PreSaleInsuredHistory;
