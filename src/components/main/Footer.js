import React from "react";
// import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "../../style.css";
import dot from "../../images/dot.png";

const Footer = () => (
  <footer>
    <div className="container-fluid information">
      <div className="row">
        <div className="col-4 first-foo">
          <img src={dot} alt="footer-logo" />
          <p className="foo-info">
            Plan and book your perfect trip with expert advice, travel tips for
            vehicle information from us
          </p>
          <p className="copyright ">
            <span>&#169;</span>2020 Vehicle Rental Center. All rights reserved
          </p>
        </div>
        <div className="col-sm foo-list">
          <h5 className="card-title footer-card">Destination</h5>
          <ul className="list-group list-group-sm">
            <li className="list-group-item">Bali</li>
            <li className="list-group-item">Yogyakarta</li>
            <li className="list-group-item">Jakarta</li>
            <li className="list-group-item">Kalimantan</li>
            <li className="list-group-item">Malang</li>
          </ul>
        </div>
        <div className="col-sm foo-list">
          <h5 className="card-title footer-card">Vehicle</h5>
          <ul className="list-group list-group-sm">
            <li className="list-group-item">Bike</li>
            <li className="list-group-item">Cars</li>
            <li className="list-group-item">Motorbike</li>
            <li className="list-group-item">Return Times</li>
            <li className="list-group-item">FAQs</li>
          </ul>
        </div>
        <div className="col-sm foo-list">
          <h5 className="card-title footer-card">Interest</h5>
          <ul className="list-group">
            <li className="list-group-item">Adventure Travel</li>
            <li className="list-group-item">Art And Culture</li>
            <li className="list-group-item"> Wildlife And Nature</li>
            <li className="list-group-item">Family Holidays</li>
            <li className="list-group-item">Culinary Trip</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid footer-bottom ">
      <hr />
      <i className="bi bi-twitter "></i>
      <i className="bi bi-facebook "></i>
      <i className="bi bi-instagram "></i>
      <i className="bi bi-linkedin "></i>
      <i className="bi bi-youtube "></i>
    </div>
  </footer>
);

export default Footer;

// <Container>
//   <Row>
//     <Col xs={5}>
//         <h5>Logo</h5>
//     <ListGroup>
//         <ListGroup.Item>Plan and book your perfect trip with expert advice, travel tips for vehicle information from us</ListGroup.Item>
//         <ListGroup.Item>2020 Vehicle Rental Center. All rights reserved</ListGroup.Item>
//       </ListGroup>
//     </Col>
//     <Col>
//     <h5>Destination</h5>
//       <ListGroup>
//         <ListGroup.Item>Bali</ListGroup.Item>
//         <ListGroup.Item>Yogyakarta</ListGroup.Item>
//         <ListGroup.Item>Jakarta</ListGroup.Item>
//         <ListGroup.Item>Kalimantan</ListGroup.Item>
//         <ListGroup.Item>Malang</ListGroup.Item>
//       </ListGroup>
//     </Col>
//     <Col>
//     <h5>Vehicle</h5>
//       <ListGroup>
//         <ListGroup.Item>Bike</ListGroup.Item>
//         <ListGroup.Item>Cars</ListGroup.Item>
//         <ListGroup.Item>Motorbike</ListGroup.Item>
//         <ListGroup.Item>Return Times</ListGroup.Item>
//         <ListGroup.Item>FAQs</ListGroup.Item>
//       </ListGroup>
//     </Col>
//     <Col xs={3}>
//     <h5>Interest</h5>
//       <ListGroup>
//         <ListGroup.Item>Adventure</ListGroup.Item>
//         <ListGroup.Item>Art and Culture</ListGroup.Item>
//         <ListGroup.Item>Family Holidays</ListGroup.Item>
//         <ListGroup.Item>Wildlife and Nature</ListGroup.Item>
//         <ListGroup.Item>Culinary Trip</ListGroup.Item>
//       </ListGroup>
//     </Col>
//   </Row>
// </Container>
