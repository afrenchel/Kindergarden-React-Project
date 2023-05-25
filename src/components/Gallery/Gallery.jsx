import React from "react";
import "./Gallery.scss";
import slider1 from "../../../public/slider_asset__0000_.jpg";
import slider2 from "../../../public/slider_asset__0001_.jpg";
import slider3 from "../../../public/slider_asset__0002_.jpg";
import slider4 from "../../../public/slider_asset__0003_.jpg";
import slider5 from "../../../public/slider_asset__0004_.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <img
          src={slider1}
          className="gallery-item gallery-item-1"
          data-index="1"
        ></img>
        <img
          src={slider2}
          className="gallery-item gallery-item-2"
          data-index="2"
        ></img>
        <img
          src={slider3}
          className="gallery-item gallery-item-3"
          data-index="3"
        ></img>
        <img
          src={slider4}
          className="gallery-item gallery-item-4"
          data-index="4"
        ></img>
        <img
          src={slider5}
          className="gallery-item gallery-item-5"
          data-index="5"
        ></img>
      </div>
      <div className="gallery-controls"></div>
    </section>
  );
};

export default Gallery;
