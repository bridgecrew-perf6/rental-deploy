import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Navigation } from "../../components";
// ReservPayComp
import "../../style.css";
import vehicleDetail from "../../images/vehicle-detail.png";
import { Card } from "react-bootstrap";
import "../../style.css";
import { postPayment } from "../../utils/https/vehicle";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservPayment = () => {
  const bodyPayment = useSelector((state) => state.transfer.data);
  const token = useSelector((state) => state.auth.userData.token);
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const user = useSelector((state) => state.user);

  // if (!token && user.data === null) {
  //   toast.info("Please login for reservation");
  //   // navigate("/login");
  // }

  useEffect(() => {
    if (!token) {
      setDisable(true);
      toast.info("Please login for reservation");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, []);

  const rentalPayment = () => {
    const { ...body } = bodyPayment;
    console.log("body tonpayemnet", body);
    postPayment(body)
      .then((res) => {
        console.log(res);
        toast.info("wait for payment");
        setTimeout(() => {
          navigate("/payment");
        }, 3500);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Reservation failed, try again");
        // navigate("/");
      });
  };
  return (
    <Layout>
      <Navigation />
      {/* <ReservPayComp /> */}
      <ToastContainer />
      <>
        <div className="container-fluid vehicle-detail">
          <div className="container-fluid">
            <Link to="/">
              <button
                type="button"
                className="btn-light btn-lg btn-block btn-back-content"
              >
                <i className="bi bi-chevron-left"></i>Reservation
              </button>
            </Link>
          </div>

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
                  </div>
                </div>

                <Card>
                  <Card.Body className="qty-payment-card">
                    <Card.Title className="mb-2 gopayment-title">
                      Qt: 2 bikes
                    </Card.Title>
                    <Card.Text className="mb-2 text-muted">
                      No Prepayment
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body className="qty-payment-card">
                    <Card.Title className="gopayment-title">
                      Details:
                    </Card.Title>
                    <Card.Text className="reservation-detail-txt">
                      1 bike : Rp. 78.000
                    </Card.Text>
                    <Card.Text className="reservation-detail-txt">
                      1 bike : Rp. 78.000
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="gopayment-date-wrapper">
            <div className="row align-items-center justify-content-center">
              <div className="col">
                <p className="reservation-date-title">Reservation date :</p>
              </div>
              <div className="col col-sm-4">
                <div type="button" className="btn gopayment-reservation-btn">
                  Start date
                </div>
              </div>
              <div className="col col-sm-4">
                <div type="button" className="btn gopayment-reservation-btn">
                  Return Date
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <div
        className="container-fluid btn-detail-bottom"
        style={{ marginBottom: "30px" }}
      >
        <div className="justify-content-center">
          <div className="btn btn-outline-secondary btn-lg btn-block btn-reservation">
            <p style={{ lineHeight: "2.5em" }}>Rp.178.000,00</p>
          </div>
          {/* <Link to="payment/payment">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg btn-block btn-reservation"
              >
                Rp.178.000,00
              </button>
            </Link> */}
          {/* <Link to="/payment"> */}
          {!token ? (
            <></>
          ) : (
            <div
              type="button"
              disabled={disable}
              className="btn btn-warning btn-lg btn-block btn-reservation yellow-color"
              // disabled={enable}
              onClick={rentalPayment}
            >
              <p style={{ lineHeight: "2.5em" }}>Go to Payment</p>
            </div>
          )}
          {/* </Link> */}
        </div>
      </div>
    </Layout>
  );
};

export default ReservPayment;
