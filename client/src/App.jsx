import "../src/components/WelcomePage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import React from "react";
import AboutUs from "./components/AboutUs";
import Review from "./components/Reviews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/reviews" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
