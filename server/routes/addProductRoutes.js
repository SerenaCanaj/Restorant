const express = require("express");
const app = express();
const ProductController = require("../controllers/addProductController");

module.exports = (app) => {
  app.get("/restorant/addProduct", ProductController.getAllProducts);
  app.get("/restorant/addProduct:id", ProductController.getProductById);
  app.post("/restorant/addProduct", ProductController.createProduct);
  app.put("/restorant/addProduct:id", ProductController.updateProduct);
  app.delete("/restorant/addProduct:id", ProductController.deleteProduct);
};
