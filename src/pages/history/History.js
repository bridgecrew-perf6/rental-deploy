import React from "react";
import { Layout, Navigation, Card } from "../../components";
import {
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
} from "react-bootstrap";
import vehicleDetail from "../../images/vehicle-detail.png";


const History =()=>  {
    return (
      <Layout>
        <Navigation />
        <div>
          <Row className="mx-auto align-items-center">
            <Col sm={8} md={9}>
              <Form className="d-flex formSearch px-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 searchbar"
                  aria-label="Search"
                />
                <i className="bi bi-search my-auto"></i>
              </Form>
            </Col>
            <Col sm={2} md={3}>
              <div className="form-check">
                <label className="form-check-label">
                  Select
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </Col>
          </Row>
          <DropdownButton
            variant="info"
            id="dropdown-basic-button"
            title="Filter"
            className="sortbyBtn"
          >
            <Dropdown.Item href="#/action-1">Read date</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Dot addedn</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Home</Dropdown.Item>
          </DropdownButton>
          <div className="form-check">
            <label className="form-check-label">
              Please finish your payment for vespa for Vespa Rental Jogja
            </label>
            <i className="bi bi-chevron-right"></i>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              Your payment has been confirmed!
            </label>
            <i className="bi bi-chevron-right"></i>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>

        <div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-12 col-lg">
              <div className="vehicle-detail-container">
                <div className="grid-image">
                  <img
                    src={vehicleDetail}
                    alt="detail-vehicle"
                    className="img-fluid img-thumbnail rounded"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg">
              <div className="card">
                <div className="card-body vehicle-info-wrapper">
                  <h1 className="display-5 vehicle-detail-title">
                    Fixie Gray - Only
                  </h1>
                  <h3 className="card-subtitle city">Jan 18 to 21 2021</h3>
                  <h3 className="card-subtitle city">Prepayment : Rp. 245.000</h3>
                  <h2 className="card-subtitle status-vehicle">Has been returned</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside>
            <h1>New Arrival</h1>
            <Card />
            <Card /> 
            <button><i className="bi bi-chevron-down"></i></button>
        </aside>
      </Layout>
    );
  }

export default History;
