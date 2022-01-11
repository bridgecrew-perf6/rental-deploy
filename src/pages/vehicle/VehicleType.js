import React, { Component } from "react";
import { Layout, Navigation, Card } from "../../components";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import "../../style.css";

class Vehicle extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <div className="popular-section">
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
          <div className="d-flex justify-content-between popular-header">
            <h1 className="home-title">Popular In Town</h1>
            <a
              href="/vehicle.html"
              type="button"
              className="btn btn-link btn-next-viewAll"
            >
              View all<i className="bi bi-chevron-right"></i>
            </a>
          </div>
          <Card />
        </div>

        <div className="popular-section">
          <div className="d-flex justify-content-between popular-header">
            <h1 className="home-title">Motorbike</h1>
            <a
              href="/vehicle.html"
              type="button"
              className="btn btn-link btn-next-viewAll"
            >
              View all<i className="bi bi-chevron-right"></i>
            </a>
          </div>
          <Card />
        </div>

        <div className="popular-section">
          <div className="d-flex justify-content-between popular-header">
            <h1 className="home-title">Cars</h1>
            <a
              href="/vehicle.html"
              type="button"
              className="btn btn-link btn-next-viewAll"
            >
              View all<i className="bi bi-chevron-right"></i>
            </a>
          </div>
          <Card />
        </div>

        <div className="popular-section">
          <div className="d-flex justify-content-between popular-header">
            <h1 className="home-title">Bike</h1>
            <a
              href="/vehicle.html"
              type="button"
              className="btn btn-link btn-next-viewAll"
            >
              View all<i className="bi bi-chevron-right"></i>
            </a>
          </div>
          <Card />
        </div>
      </Layout>
    );
  }
}

export default Vehicle;
