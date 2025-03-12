import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/Reviews.css";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get("http://localhost:8000/restorant/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/restorant/reviews", {
        name,
        rating,
        comment,
      });
      setReviews([...reviews, { rating, name, comment }]);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="reviewsPage">
      <form onSubmit={handleSubmit}>
        <h1 className="reviewsTitle">
          Your <span className="feedback">Feedback</span> improves our service!
        </h1>
        <h2>Leave a Review</h2>
        <div className="giveReview">
          <div className="nameSection">
            <label>
              &darr; Name &darr;
              <input className="nameInput" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div className="ratingSection">
            <label className="ratingField">
              &darr; Rating &darr;
              <input
                className="ratingInput"
                type="number"
                min="1"
                max="10"
                defaultValue={""}
                onChange={(e) => setRating(e.target.value)}
              />
            </label>
          </div>
          <div className="commentSection">
            <label>
              &darr; Comment &darr;
              <input
                className="commentInput"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
      <h2>Reviews:</h2>
      <div className="reviewsGrid">
        {reviews.map((review, index) => (
          <div key={review.id || index} className="reviewCard">
            <h3>
              Name: <br />
              {review.name}
            </h3>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))}
      </div>
      <div className="buttonsReviews">
        <button className="homeButtonReviews" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="menuButtonReviews" onClick={() => navigate("/menu")}>
          Menu
        </button>
      </div>
    </div>
  );
};

export default Reviews;
