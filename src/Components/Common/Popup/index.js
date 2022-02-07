import React, {useContext}from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
import Checkbox from "../Checkbox";
import { customizeDashboardContext } from "../../ContextApi/CustomizeDashBoardContext";
const Popup = (props) => {
  const customizeDashboardC = useContext(customizeDashboardContext);
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal-heading"
          >
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <div className="modal-section-wrapper">
              <h4>Main Navigation</h4>
              <Row>
                <Col xs={12} md={4}>
                  <Checkbox
                    title="My Dashboard"
                    contextProviderData={customizeDashboardC.dashboardTab}
                    contextProviderSetData={customizeDashboardC.setDashboardTab}
                    icon="Speedometer"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Checkbox
                    title="Sales Tools"
                    contextProviderData={customizeDashboardC.dashboardTab}
                    contextProviderSetData={customizeDashboardC.setDashboardTab}
                    icon="BriefcaseFill"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Checkbox
                    title="Renewals"
                    contextProviderData={customizeDashboardC.dashboardTab}
                    contextProviderSetData={customizeDashboardC.setDashboardTab}
                    icon="UmbrellaFill"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <Checkbox
                    title="My Commissions"
                    contextProviderData={customizeDashboardC.dashboardTab}
                    contextProviderSetData={customizeDashboardC.setDashboardTab}
                    icon="CurrencyDollar"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Checkbox
                    title="My Clients"
                    contextProviderData={customizeDashboardC.dashboardTab}
                    contextProviderSetData={customizeDashboardC.setDashboardTab}
                    icon="StarFill"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Checkbox
                    title="Reports"
                    contextProviderData={customizeDashboardC.dashboardTab}
                    contextProviderSetData={customizeDashboardC.setDashboardTab}
                    icon="FileEarmarkTextFill"
                  />
                </Col>
              </Row>
            </div>
            <hr />
            <div className="modal-section-wrapper">
              <h4>Widgets</h4>
              <Row>
                <Col xs={6} md={4}>
                  <Checkbox title="My Dashboard" icon="Speedometer" />
                </Col>
                <Col xs={6} md={4}>
                  <Checkbox title="My Dashboard" icon="Speedometer" />
                </Col>
                <Col xs={6} md={4}>
                  <Checkbox title="My Dashboard" icon="Speedometer" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} size="sm" className="m-2">
                  <Button variant="secondary" className="btn-add ml-auto">
                    Add New Widget
                  </Button>
                </Col>
              </Row>
            </div>
            <hr />
            <div className="modal-section-wrapper">
              <h4>Features</h4>
              <Row>
                <Col xs={6} md={4}>
                  <Checkbox title="My Dashboard" icon="Speedometer" />
                </Col>
                <Col xs={6} md={4}>
                  <Checkbox title="My Dashboard" icon="Speedometer" />
                </Col>
                <Col xs={6} md={4}>
                  <Checkbox title="My Dashboard" icon="Speedometer" />
                </Col>
              </Row>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center align-content-center">
          <Button
            onClick={props.onHide}
            size="sm"
            variant="secondary"
            className="lida-button-default w-25 ml-auto"
          >
            Reset
          </Button>
          <Button
            onClick={props.onHide}
            size="sm"
            variant="secondary"
            className="lida-button-default w-25 mr-auto"
          >
            Save & Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Popup;
