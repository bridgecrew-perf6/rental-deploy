/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react"; //useCallback
import { Layout, Navigation, Bike } from "../../components";
import { Form, FormControl } from "react-bootstrap";
import vehicleDetail from "../../images/vehicle-detail.png";
import "../../style.css";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const History = () => {
  let [historyList, setHistoryList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  axios.defaults.baseURL = "https://arka-vehicle-rental.herokuapp.com/history";

  const fetchData = () => {
    axios
      .get("./")
      .then((response) => {
        setHistoryList(response.data.result);
        //console.log(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandle = (id) => {
    axios
      .delete(`https://arka-vehicle-rental.herokuapp.com/history/${id}`)
      .then((response) => {
        const del = historyList.filter((index) => id !== index.id);
        setHistoryList(del);
      });
  };

  return (
    <Layout>
      <Navigation />
      <div className="row history-wrapper">
        <div className="col col-md-6 col-lg-7 main-section-history">
          <div className=" row mx-auto align-items-center">
            <div className="col col-sm-6 col-md-9">
              <Form className="d-flex formSearch px-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 searchbar"
                  aria-label="Search"
                />
                <i className="bi bi-search my-auto"></i>
              </Form>
            </div>
            <div className="col col-sm-2 col-md-3">
              <div className="form-check">
                <label className="form-check-label history-check-form">
                  Select
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
          </div>
          <div className="btn-group">
            <button
              className="btn btn-light dropdown-toggle history-filter-btn mx-2"
              type="button"
              id="defaultDropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              Filter
              <span className="dropdown-span-icon">
                <i className="bi bi-chevron-down"></i>
              </span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
              <li>
                <a className="dropdown-item">Menu item</a>
              </li>
              <li>
                <a className="dropdown-item">Menu item</a>
              </li>
              <li>
                <a className="dropdown-item">Menu item</a>
              </li>
            </ul>
          </div>

          <div className="row justify-content-start align-items-center">
            <div className="col col-sm-7 col-md-11 form-check my-3 history-check-form">
              <p className="form-check-label m-0">
                Please finish your payment for vespa for Vespa Rental Jogja
                <i className="bi bi-chevron-right mx-5"></i>
              </p>
            </div>
            <div className="col col-sm-1 col-md-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
          </div>

          <div className="row justify-content-start align-items-center">
            <div className="col col-sm-7 col-md-11 form-check my-3 history-check-form">
              <p className="form-check-label m-0">
                Your payment has been confirmed!
                <i className="bi bi-chevron-right mx-5"></i>
              </p>
            </div>
            <div className="col col-sm-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
          </div>

          <div>
            <p className="history-card-title-header"> Week ago</p>
            {historyList.map((history) => (
              <div
                className="row justify-content-center"
                style={{ width: "100%" }}
                key={history.id}
              >
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
                <div className="col-sm-5 col-md-11 col-lg">
                  <div className="card">
                    <div className="card-body vehicle-info-wrapper">
                      <p className="vehicle-detail-title-history">
                        {" "}
                        <strong>{history.vehicle_name}</strong>
                      </p>
                      <p className="card-subtitle text-history-card">
                        {history.end_date}
                      </p>
                      <p className="card-subtitle text-history-card">
                        <strong>{history.total_payment}</strong>
                      </p>
                      <p className="card-subtitle status-vehicle">
                        {history.status}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col col-sm-1 col-md-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                    onClick={handleShow}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="col col-md-4 col-lg-4 aside-history">
          <p className="aside-title-history">New Arrival</p>
          <Bike />
          <p className="aside-title-history-bottom">View more</p>
          <button className="aside-history-icon-chevron">
            <i className="bi bi-chevron-down"></i>
          </button>
        </aside>
      </div>

      <Modal
        className="aside-title-history-bottom"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are you Sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={() => deleteHandle()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default History;
//export default History;

// {historyList.map((index) => {
//   return (
//     <p>
//       history id : {index.id} | history name : {index.name}
//     </p>
//   );
// })}
