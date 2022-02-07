import React, { useEffect, useState } from "react";
import "./Nav.scss";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });

    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`nav ${show && "nav--black"}`}>
      <div className="nav__logo">
        <img src="./image/1920px-Netflix_2015_logo.svg.png" alt="Logo" />
      </div>
    </div>
  );
}

export default Nav;
