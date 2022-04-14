import React, { useState, useEffect } from "react";
import vehicleDetail from "../../images/vehicle-detail.png";
import "../../style.css";
import "./style.css";
import { Layout, Navigation } from "../../components";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const formatPrice = (value) => {
  let price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(value)
    .replace(/(\.|,)00$/g, "");
  return price;
};
const formatTime = (time) =>
  `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
    time % 60
  ).padStart(2, "0")}`;

const useTimer = (startTime) => {
  const [time, setTime] = useState(startTime);
  const [intervalID, setIntervalID] = useState(null);
  const hasTimerEnded = time <= 0;
  const isTimerRunning = intervalID != null;

  useEffect(() => {
    const update = () => {
      setTime((time) => time - 1);
    };
    const startTimer = () => {
      if (!hasTimerEnded && !isTimerRunning) {
        setIntervalID(setInterval(update, 1000));
      }
    };
    startTimer();
  }, []);
  const stopTimer = () => {
    clearInterval(intervalID);
    setIntervalID(null);
  };
  // clear interval when the timer ends
  useEffect(() => {
    if (hasTimerEnded) {
      clearInterval(intervalID);
      setIntervalID(null);
    }
  }, [hasTimerEnded]);
  // clear interval when component unmounts
  useEffect(
    () => () => {
      clearInterval(intervalID);
    },
    []
  );
  return {
    time,
    // startTimer,
    stopTimer,
  };
};

const Payment = () => {
  const navigate = useNavigate();
  const finishPayment = () => {
    toast.info("payment success");
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };
  // const dispatch = useDispatch();
  // const [enable, disable] = useState(false);
  const user = useSelector((state) => state.user.data);
  const productData = useSelector((state) => state.productData.data);

  const v = useSelector((state) => state.transfer.data);
  //     disable(true);
  const { time, stopTimer } = useTimer(3600);
  // startTimer,
  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <Navigation />
      <ToastContainer />

      <div className="container-fluid payment-back-btn">
        <button
          type="button"
          className="btn-light btn-lg btn-block btn-back-content"
        >
          <i className="bi bi-chevron-left"></i>Payment
        </button>
      </div>

      <div className="relative-header-payment">
        <div className="container-fluid">
          <img src={vehicleDetail} className="img-fluid-payment" alt="bg" />
          <div className="bg-pass-payment container-fluid"></div>
        </div>
      </div>

      <div className="main-child-payment">
        <div className="col-sm-6 col-md-12 col-lg">
          <div className="card payment-header">
            <div className="card-body">
              <h1 className="display-5 payment-vehicle-name">
                {v.vehicle_name}
              </h1>
              <h3 className="card-subtitle payment-city">{v.destination}</h3>
              <h2 className="card-subtitle payment-method">No prepayment</h2>
            </div>
          </div>
        </div>
        <div className="btn-payment-time">
          <div></div>
          {/* <button onClick={startTimer}>start</button> */}
          {/* <button onClick={stopTimer}>stop</button> */}
          <p className="payment-time-text">
            Pay before : <span> {formatTime(time)}</span>
          </p>
        </div>
      </div>

      <div className="container-fluid payment-content">
        <div className="row payment-code-wrapper">
          <div className="col col-sm-5 col-md-5 col-lg">
            <p className="font-based-payment-book">Payment code :</p>
            <div className="row justify-content-center align-items-center code-book-wrapper">
              <div className="col col-sm-3 col-md-3 col-lg">
                <p className="font-based-payment-book">{v.payment_code}</p>
              </div>
              <div className="col col-sm-3 col-md-3 col-lg">
                <div className="btn btn-booking-code">copy</div>
              </div>
            </div>
          </div>
          <div className="col col-sm-5 col-md-5 col-lg">
            <p className="font-based-payment-book">Booking code :</p>
            <div className="row justify-content-center align-items-center code-book-wrapper">
              <div className="col col-sm-3 col-md-3 col-lg">
                <p className="font-based-payment-book">{v.booking_code}</p>
              </div>
              <div className="col  col-sm-3 col-md-3 col-lg">
                <div className="btn btn-booking-code">copy</div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="title-detail-order-payment">DETAIL ORDER</h1>
        <div className="row align-items-center justify-content-center payment-code-wrapper">
          <div className="col-4 detail-book-wrapper-qty">
            <p className="font-based-payment-book">Quantity: {v.qty} Bikes</p>
          </div>
          <div className="col-8 detail-book-wrapper">
            <p className="font-based-payment-book">
              Reservation date: {v.start_date}
            </p>
          </div>
        </div>
        <div className="row row align-items-center justify-content-center payment-code-wrapper">
          <div className="col-4 detail-book-wrapper-qty">
            <p className="payment-deytail-order-title">Price detail :</p>
            <p className="font-based-payment-book">
              {v.qty} {productData.type} : {formatPrice(v.total_payment)}
            </p>
          </div>
          <div className="col-8 detail-book-wrapper">
            <p className="payment-deytail-order-title">Identity :</p>
            <p className="font-based-payment-book">
              {v.user} ({user.mobile_number})
            </p>
            <p className="font-based-payment-book">{user.email}</p>
          </div>
        </div>
        <h1 className="title-detail-order-payment">PAYMENT METHOD</h1>
        <div className="row align-items-center justify-content-center payment-transfer-wrapper">
          <div className="col-3 btn-transfer-payment transfer-payment-transfer-left">
            TRANSFER
          </div>
          <div className="col-3 btn-transfer-payment transfer-payment-transfer-right">
            CASH
          </div>
        </div>

        <div
          type="button"
          // disabled={enable}
          onClick={(finishPayment, stopTimer)}
          className="btn btn-finish-payment"
        >
          Finish Payment
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
