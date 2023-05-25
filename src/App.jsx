import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
    </>
  );
}

export default App;
