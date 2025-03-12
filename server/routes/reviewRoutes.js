const express = require("express");
const app = express();
const ReviewController = require("../controllers/reviewController");

module.exports = (app) => {
  app.get("/restorant/reviews", ReviewController.getAllReviews);
  app.post("/restorant/reviews", ReviewController.createReview);
};
