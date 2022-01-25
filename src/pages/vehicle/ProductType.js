import React, { Component } from "react";
import {
  Bike,
  Cars,
  Motorbike,
  PopularHome,
} from "../../components";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import "../../style.css";

class ProductType extends Component {
  render() {
    return (
      <div className="vehicelCategory-wrapper">
        <Container>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
        <PopularHome />
        <Motorbike />
        <Cars />
        <Bike />
      </div>
    );
  }
}

export default ProductType;
