import React from "react";
import "../components/WelcomePage.css";
import { Link, useNavigate } from "react-router-dom";
import SAF from "../assets/SAF.png";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="welcomePage">
      <div className="top">
        <h1 className="welcomeTitle">Welcome</h1>
        <img className="SAF" src={SAF} alt="SAF" />
      </div>
      <div className="allButtons">
        <button onClick={() => navigate("/menu")} className="menu">
          Menu <span className="menuIcon">&#9776;</span>
        </button>
        <nav className="welcomeButtons">
          <button onClick={() => navigate("/about")} className="about">
            &#127760; About us
          </button>
          <button onClick={() => navigate("/reviews")} className="reviews">
            &#10003; Reviews
          </button>
          <button onClick={() => navigate("/location")} className="location">
            &#x1F4CD; Location
          </button>
        </nav>
      </div>

      <p className="onlineOrder">
        Do you want to order online?
        <br />{" "}
        <Link to="/onlineOrder" className="clickHere">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default WelcomePage;
