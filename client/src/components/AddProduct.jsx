import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/AddProduct.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [isAvailable, setIsAvailable] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/restorant/addProduct", {
        name,
        price,
        description,
        category,
        isAvailable,
      });
      navigate("/adminDashboard");
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <div className="addProduct">
      <div className="form-container">
        <form className="product-form" onSubmit={handleSubmit}>
          <label className="form-label">Product Name:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Price:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label className="form-label">Description:</label>
          <textarea
            className="form-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="form-label">Category:</label>
          <select className="form-input" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
          </select>

          <label className="form-label">Is Available:</label>
          <select className="form-input" value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)}>
            <option value="">Select availability</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
          <button className="submit-button" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
