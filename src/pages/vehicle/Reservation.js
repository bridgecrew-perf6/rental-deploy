import React, { useState, useEffect } from "react";
import { Layout, Navigation } from "../../components";
// , ReservationComponent
import "../../style.css";
import vehicleDetail from "../../images/vehicle-detail.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { transferUser } from "../../redux/actions/transfer";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formatPrice = (value) => {
  let price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(value)
    .replace(/(\.|,)00$/g, "");
  return price;
};

const Reservation = (props) => {
  // console.log(props.history.location.state);
  const user = useSelector((state) => state.user);
  // const user_name = useSelector((state) => state.user.data.name);
  const v = useSelector((state) => state.transfer.data);
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);

  const [bookCode, setBookCode] = useState(null);
  const [paymentCode, setPaymentCode] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const defaultDate = new Date().toISOString().substring(0, 10);
  console.log(defaultDate);

  const [dataOptionals, setDataOptionals] = useState({
    day: "1",
    date: defaultDate,
  });
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.userData.token);
  const location = useLocation();
  const data = location.data;
  console.log(data, props.data);
  const [counter, setCounter] = useState(v.qty);
  // const [counterPrice, setCounterPrice] = React.useState();

  const addCounter = () => {
    if (v.qty !== null) {
      setDisable(true);
    } else {
      const newCounter = counter + 1;
      setCounter(newCounter);
    }
    // const newCounterPrice = counterPrice + counterPrice;
  };

  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };

  // const { data } = props.location;
  // console.log("our props : ", data.counter, data.id, data.text);

  const handleChange = (e) => {
    const value = e.target.value;
    setDataOptionals({
      ...dataOptionals,
      [e.target.name]: value,
    });
  };

  console.log("opt data : ", dataOptionals.day, dataOptionals.date);
  // const value = e.target.value;
  // console.log("day : ", value.day);
  // const buttonReservation = () => {};
  useEffect(() => {
    const rnd = (() => {
      const gen = (min, max) =>
        max++ &&
        [...Array(max - min)].map((s, i) => String.fromCharCode(min + i));

      const sets = {
        num: gen(48, 57),
        alphaLower: gen(97, 122),
        alphaUpper: gen(65, 90),
        special: [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`],
      };

      function* iter(len, set) {
        if (set.length < 1) set = Object.values(sets).flat();
        for (let i = 0; i < len; i++)
          yield set[(Math.random() * set.length) | 0];
      }

      return Object.assign(
        (len, ...set) => [...iter(len, set.flat())].join(""),
        sets
      );
    })();
    setBookCode(rnd(20, rnd.alphaLower));
    setPaymentCode(rnd(20, rnd.alphaUpper));
    //console.log("OUTPUT: ", rnd(20)); // Use all sets
    // OUTPUT:  Kr8K1,f5hQa;YJC~7K9z
    // console.log("OUTPUT lower: ", rnd(20, rnd.alphaLower));
    // OUTPUT:  cpjbkwvslxsofzvkekcw
    // console.log("OUTPUT upper: ", rnd(20, rnd.alphaUpper));
    // OUTPUT: ----
    // console.log("OUTPUT: ", rnd(20, rnd.alphaUpper, rnd.special));
    // OUTPUT:  S]|-X]=N}TZC,GE;=,.D
  }, []);

  // console.log("all code : ", bookCode, paymentCode);
  // useEffect(() => {
  //if (user.data === null) {
  // toast.info("you need to login first");
  // navigate("/");
  // }
  // });

  useEffect(() => {
    setTotalPayment(
      v.total_payment * v.qty + v.total_payment * dataOptionals.day
    );
  });
  // useEffect(() => {
  // const endDate = () => {
  // };
  // }, [endDate]);

  const [endDate, setendDate] = useState(null);
  const reservation = () => {
    let date = new Date();
    setendDate(dataOptionals.day + dataOptionals.date);
    console.log(endDate);
    // if (!token) {
    //   toast.info("you cant reservation");
    //   // navigate("/");
    // }
    if (!token && user.data === null) {
      toast.info("Please login for reservation");
      // navigate("/login");
      setDisable(true);
    } else {
      const data = {
        ...v,
        user: user.data.name,
        user_payment_id: user.data.id,
        qty: v.qty,
        total_payment: totalPayment,
        start_date: dataOptionals.date,
        end_date: endDate,
        // email: user.data.email,
        // mobile_number: user.data.mobile_number,
        payment_code: paymentCode,
        booking_code: bookCode,
      };
      dispatch(transferUser(data));
      // console.log(data);
      toast.success("Reservation Success");
      navigate("/payment");
    }
  };

  return (
    <Layout>
      <Navigation />
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
                      {v.vehicle_name}
                    </h1>
                    <h3 className="card-subtitle city">{v.destination}</h3>
                    <h2 className="card-subtitle payment-info">
                      No prepayment
                    </h2>
                    <div className="container-fluid d-flex justify-content-center qty-box mx-1">
                      <button
                        onClick={subCounter}
                        disabled={disable}
                        type="button"
                        className="btn btn-light min-qty"
                      >
                        -
                      </button>
                      <div className="form-group">
                        <p className="form-control text-qty">
                          {counter}
                          {/* {v.qty !== null ? v.qty : counter} */}
                        </p>
                      </div>
                      <button
                        onClick={addCounter}
                        disabled={disable}
                        type="button"
                        className="btn btn-warning plus-qty"
                      >
                        +
                      </button>
                    </div>
                    <div className="container-fluid">
                      <h3 className="reservation-date">Reservation Date :</h3>
                      <div className="container-fluid">
                        <input
                          type="date"
                          name="date"
                          // value="12-04-2022"
                          defaultValue={defaultDate}
                          className="datepicker box-btn"
                          placeholder="Select date"
                          // id="datereservation"
                          onChange={handleChange}
                        />
                      </div>

                      <div
                      // className="btn dropdown-toggle box-btn btn-day-options"
                      // type="button"
                      >
                        <select
                          id="status"
                          name="day"
                          className="btn-reservation box-btn btn-day-options"
                          style={{
                            borderRadius: "4px",
                            height: "50px",
                            fontSize: "20px",
                            margin: "auto",
                            lineHeight: "2rem",
                          }}
                          onChange={handleChange}
                        >
                          <option value="" disable="true" hidden>
                            1 Day
                          </option>
                          <option value="" className="choose-category" disabled>
                            selectDay
                          </option>
                          <option value="1">1 Day</option>
                          <option value="2">2 Day</option>
                          <option value="3">3 Day</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* <ReservationComponent /> */}
      <div
        className="container-fluid btn-detail-bottom"
        style={{ marginBottom: "30px" }}
      >
        <div className="row justify-content-center">
          <Link to="/detail/payment">
            <div
              type="button"
              className="btn btn-warning btn-lg btn-block btn-pay-reservation-price yellow-color"
              disabled={disable}
              onClick={reservation}
            >
              <p style={{ lineHeight: "2.5em" }}>
                {dataOptionals.day !== undefined
                  ? formatPrice(totalPayment)
                  : "Please select day"}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Reservation;
