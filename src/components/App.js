import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainCover from "./MainCover/MainCover";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainCover />
      <Footer />
    </div>
  );
}
