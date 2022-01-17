import React from "react";
import { Layout, Navigation } from "../../components";
import vehicleDetail from "../../images/vehicle-detail.png";
import "../../style.css";
import { Card,Form, FormControl } from "react-bootstrap";
import profileImage from "../../images/edward.png";

const Chatdetail = () => {
  return (
    <Layout>
      <Navigation />
      <div className="container-fluid chat-vehicle-wPic">
        <button
          type="button"
          className="btn-light btn-lg btn-block btn-back-content"
        >
          <i className="bi bi-chevron-left"></i>Rental 1
        </button>

        <div className="container-fluid vehicle-detail">
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
                  <h3 className="card-subtitle city">Yogyakarta</h3>
                  <h2 className="card-subtitle status-vehicle">Available</h2>
                  <div className="price">
                    <h4>Rp. 128.000/day</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid chat-wrapper">
          <div className="row">
            <div className="col col-sm-10 col-md-10 chat-right-user">
              <Card className="chat-right-detail-user">
                <Card.Body className="chat-text-wrapper-card chat-text-wrapper-user">
                  <Card.Text className="chat-detail-page-wrapper chat-text-detail-font-user">
                    Some quick example text to <br />
                    build on the card title and make up the
                  </Card.Text>
                </Card.Body>
                <Card.Text className="text-muted text-right px-2 py-2">12.02 PM</Card.Text>
              </Card>
            </div>

            <div className="col col-sm-1 col-md py-2">
              <img
                src={profileImage}
                className="profile-pic-chat-detail"
                alt="profileImg"
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col col-sm-1 col-md py-2 chat-left-admin">
              <img
                src={profileImage}
                className="profile-pic-chat-detail chat-right-user" 
                alt="profileImg"
              />
            </div>

            <div className="col col-sm-10 col-md-10">
              <Card>
                <Card.Body className="chat-text-wrapper-card chat-text-wrapper-admin">
                  <Card.Text  className="chat-detail-page-wrapper chat-text-detail-font-admin">
                    Some quick example text to <br />
                    build on the card title and make up the
                  </Card.Text>
                </Card.Body>
                <Card.Text className="text-muted px-2 py-2">12.02 PM</Card.Text>
              </Card>
            </div>
          </div>
        </div>

      
        <div className="gopayment-date-wrapper">
          <div className="row align-items-center justify-content-center">
            <div className="col col-sm-3">
              <p className="popUp-suggest-text">Pop up Suggestion :</p>
            </div>
            <div className="col col-sm-2">
              <div type="button" className="btn pop-up-btn">Thank you</div>
            </div>
            <div className="col col-sm-2">
              <div type="button" className="btn pop-up-btn">ok</div>
            </div>
          </div>
          <div>
            <Form className="d-flex formSearch px-3">
              <FormControl
                type="search"
                placeholder="Type a message"
                className="me-2 searchbar"
                aria-label="Search"
              />
              <i className="bi bi-camera my-auto"></i>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chatdetail;
