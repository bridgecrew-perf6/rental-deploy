import React from "react";
import bg from "../../images/bg.png";
// import bgActive from "../../images/bg-after-login.png";

function Header() {
  return (
    <div className="relative-header">
      <div className="container-fluid sm-dev">
        <img src={bg} className="img-fluid" alt="bg" />
        <div className="bg-pass container-fluid"></div>
      </div>
    </div>
  );
}

export default Header;
