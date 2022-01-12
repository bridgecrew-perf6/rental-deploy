import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, Vehicle, Detail, Login, Profile, SignUp, VehicleType, ChatVOne, Notfound, ForgotPassword, ReservationComponent, ReservPayment} from "./pages";
import { Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      {/* <Route path="/form" component={Form} /> */}
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/vehicle" component={Vehicle} />
        <Route path="/vehicle-type" component={VehicleType} />
        <Route path="/payreservation" component={ReservationComponent} />
        <Route path ="/payment" component={ReservPayment}/>
        <Route path="/detail" component={Detail} />
        <Route path="/chatdetail" component={ChatVOne} />
        {/* <Route path="/chat" component={ChatVtwo} /> */}
        <Route path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
