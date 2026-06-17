import { useState } from "react";
import "./ProductManager.css";

export default function ProductManager() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      inStock: true,
      reviews: ["Excellent", "Good Battery"],
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      inStock: false,
      reviews: ["Nice Camera", "Value for Money"],
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      inStock: true,
      reviews: ["Good Sound", "Comfortable"],
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSelectedProduct({
      ...selectedProduct,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveChanges = () => {
    setProducts(
      products.map((product) =>
        product.id === selectedProduct.id ? selectedProduct : product
      )
    );

    setIsEditing(false);
  };

  return (
    <div className="container">
      <h1>Product Landing Page</h1>

      <div className="card-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            onClick={() => {
              setSelectedProduct(product);
              setIsEditing(false);
            }}
          >
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="details-box">
          <h2>Product Details</h2>

          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={selectedProduct.name}
                onChange={handleChange}
              />

              <input
                type="number"
                name="price"
                value={selectedProduct.price}
                onChange={handleChange}
              />

              <label>
                In Stock
                <input
                  type="checkbox"
                  name="inStock"
                  checked={selectedProduct.inStock}
                  onChange={handleChange}
                />
              </label>

              <button onClick={saveChanges}>Save</button>
            </>
          ) : (
            <>
              <p>
                <strong>Name:</strong> {selectedProduct.name}
              </p>

              <p>
                <strong>Price:</strong> ₹ {selectedProduct.price}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {selectedProduct.inStock ? "In Stock" : "Out Of Stock"}
              </p>

              <h3>Reviews</h3>

              <ul>
                {selectedProduct.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>

              <button onClick={() => setIsEditing(true)}>
                Edit Product
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}