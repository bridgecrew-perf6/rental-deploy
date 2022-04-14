import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div className="top-to-btm">
      scroll
      {showTopBtn && (
        <i className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
};
export default ScrollToTop;
