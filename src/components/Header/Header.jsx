import React from "react";
import "./Header.scss";
import { GiFairyWand } from "react-icons/gi";

const Header = () => {
  return (
    <section className="header-container">
      <div className="logo">
        Casuta zanelor <GiFairyWand />
      </div>
      <div className="navbar">
        <ul className="navbar-items">
          <li> Home</li>
          <li>Gallery</li>
          <li>Locations</li>
          <li>Pricing</li>
        </ul>
        <button className="btn-contact">Contact</button>
      </div>
    </section>
  );
};

export default Header;
