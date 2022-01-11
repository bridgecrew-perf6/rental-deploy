import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <p>Click to "/Signup" which is registered route</p>
      <Link to="/Signup">Let's go</Link>
    </div>
  );
};

export default Notfound;
