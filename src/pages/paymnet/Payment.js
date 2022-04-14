import React from "react";
import vehicleDetail from "../../images/vehicle-detail.png";
import "../../style.css";
import "./style.css";
import { Layout, Navigation } from "../../components";
// import { transferUser } from "../../redux/actions/transfer";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const finishPayment = () => {
    toast.info("payment success");
  };
  // const dispatch = useDispatch();
  // const [enable, disable] = useState(false);
  const user = useSelector((state) => state.user.data);
  // // const user_name = useSelector((state) => state.user.data.name);
  const v = useSelector((state) => state.transfer.data);

  // const navigate = useNavigate();
  // const token = useSelector((state) => state.auth.userData.token);

  // // const buttonReservation = () => {};

  // useEffect(() => {
  //   if (user.data === null) {
  //     toast.info("you need to login first");
  //     // navigate("/");
  //   }
  // });
  // const reservation = () => {
  //   // if (!token) {
  //   //   toast.info("you cant reservation");
  //   //   // navigate("/");
  //   // }
  //   if (!token && user.data === null) {
  //     toast.info("Please login for reservation");
  //   } else {
  //     disable(true);
  //     const data = {
  //       ...v,
  //       userId: user.data.id,
  //       userName: user.data.name,
  //     };
  //     dispatch(transferUser(data));
  //     // console.log(data);
  //     toast.success("Reservation Success");
  //   }
  // };
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
          <p className="payment-time-text">
            Pay before : <span> 59:30</span>
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
              {v.qty} bike : {v.total_payment}
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
          onClick={finishPayment}
          className="btn btn-finish-payment"
        >
          Finish Payment
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
