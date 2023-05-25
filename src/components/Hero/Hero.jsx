import React from "react";
import "./Hero.scss";
import fairy from "../../../public/465.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1>Casuta Zanelelor</h1>
        <p>
          Cresa - Gradinita Particulara Casuta Zanelor din Iasi este taramul de
          basm in care copiii sunt incurajati sa viseze, sa aibe incredere in
          ceea ce simt si sa-si transforme visele in povestea lor de viata. Sunt
          ingrijiti si incurajati sa-si dezvolte deprinderile de viata autonoma,
          iubiti si sfatuiti sa iubeasca, invatati si indrumati sa invete.
          Credem in excelenta, inovatie, responsabilitate si respect in actul
          educational. Va dorim o calatorie placuta in Casuta Zanelor!
        </p>
      </div>
      <div className="hero-right">
        <img className="hero-img" src={fairy} alt="fairy"></img>
      </div>
    </section>
  );
};

export default Hero;
