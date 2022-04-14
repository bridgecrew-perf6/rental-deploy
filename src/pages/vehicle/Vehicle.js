import React from "react";
import { Layout, Navigation } from "../../components";
// import Product from "./Product";
import "../../style.css";
import { Link, Outlet } from "react-router-dom";

const Vehicle = () => {
  return (
    <Layout>
      <Navigation />
      <div className="popular-section-view">
        {/* <h1>Popular In Town</h1>
        <p>Click item to see details and reservation</p> */}
        {/* <AllVehicle /> */}
        <Link to="/product/All-Product" />
        <Link to="/product/search" />
        <Link to="/product/category" />
        <Outlet />
        {/* <p>There is no vehicle left</p> */}
      </div>
    </Layout>
  );
};

export default Vehicle;
