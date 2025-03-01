import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutUs">
      <div className="buttons">
        <button onClick={() => navigate("/")} className="home">
          Home
        </button>
        <button onClick={() => navigate("/menu")} className="menu">
          Menu <span className="menuIcon">&#9776;</span>
        </button>
        <button onClick={() => navigate("/onlineOrder")} className="Order">
          Order Now
        </button>
      </div>
      <h1 className="aboutUsTitle">About Us</h1>
      <p className="aboutUsText">
        - Welcome to SAF, a culinary haven where passion for food meets an
        exquisite dining experience. From the moment you step inside, you'll be
        immersed in an ambiance of elegance, warmth, and sophistication.
        <br /> <br />- Our thoughtfully designed interiors, featuring soft
        lighting, contemporary décor, and a welcoming atmosphere, set the stage
        for an unforgettable meal. At SAF, we take pride in using only the
        finest, freshest ingredients to create dishes that delight the senses.
        <br /> <br />
        - Our menu is a harmonious blend of classic flavors and modern
        creativity, offering a diverse selection of expertly crafted dishes to
        satisfy every palate. Whether you're indulging in our signature entrées,
        exploring our seasonal specialties, or sharing small plates with
        friends, every bite is a journey of flavor and craftsmanship. Complement
        your meal with a selection from our curated wine list or enjoy a
        handcrafted cocktail made by our skilled mixologists.
        <br /> <br />
        - Our commitment to excellence extends beyond the plate—our attentive
        staff ensures that every guest receives impeccable service, making each
        visit to SAF a truly special occasion. Perfect for intimate dinners,
        lively gatherings, and memorable celebrations, SAF is more than just a
        restaurant—it''s an experience.
        <br /> <br />
        <span className="joinUs">
          "Join us and discover a world of culinary artistry where every dish
          tells a story.
        </span>
        <br />
      </p>
    </div>
  );
};

export default AboutUs;
