import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Home,
  Login,
  Profile,
  SignUp,
  Notfound,
  ForgotPassword,
  ReservationComponent,
  ReservPayment,
  ChatPage,
  ChatDetail,
  Payment,
  History,
  Postvehicle,
  Vehicle,
  Product,
  ProductType,
  ProductDetail,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigate
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor } from "./redux/store";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.userData.token);
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/product" element={<Vehicle />}>
            <Route path="category" element={<ProductType />} />
            <Route path="list" element={<Product />} />
            <Route path="search" element={<ProductType />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="/post-vehicle" element={<Postvehicle />} />
          <Route path="/reservation" element={<ReservationComponent />} />
          <Route path="/detail/payment" element={<ReservPayment />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat-detail" element={<ChatDetail />} />
          <Route path="/history" element={<History />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </PersistGate>
  );
}

export default App;

// {/* <Route exact path='/login'
// render={(props) => {
//   if (accessToken)

//   return <Navigate from="/login" to="/" />;
//   return <Login {...props} />;
// }}/>  */}

// {/* <Route path="/chat-message" element={<ChatNav/>} /> */}

// <Route
// path="/vehicles/:id"
// render={(routeProps) => {
//   const { match } = routeProps;
//   if (!accessToken)
//     return (
//       <Navigate
//         from={`/vehicles/${match.params.id}`}
//         to="/"
//       />
//     );
//   return <Detail {...routeProps} />;
// }}
// />
// <Route path="/vehicles"
// render={(routeProps)=>{
// if(!accessToken)
// return <Navigate from="/vehicles" to="/" />;
// return <Vehicle {...routeProps} />;
// }}
// />
// <Route
// path="/post-vehicle"
// render={(routeProps) => {
//   if (!accessToken)
//     return <Navigate from="/post-vehicle" to="/login" />;
//   return <Postvehicle {...routeProps} />;
// }}
// />
// <Route
// path="/pay-reservation"
// render={(routeProps) => {
//   if (!accessToken)
//     return <Navigate from="/pay-reservation" to="/login" />;
//   return <ReservationComponent {...routeProps} />;
// }}
// />
