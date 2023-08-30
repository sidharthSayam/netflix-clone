import React, { useState, useEffect } from "react";
import "./css/Nav.css";

function Navbar() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setShowBackground(true);
      else setShowBackground(false);
    });

    // return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`nav ${showBackground && "nav_black"}`}>
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt="Netflix Logo"
        className="nav_logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Login Avatar"
        className="user_logo"
      />
    </div>
  );
}

export default Navbar;
