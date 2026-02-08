import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const backendPostUrl = import.meta.env.VITE_BACKEND_POST;

      // POST the product to backend
      const res = await fetch(backendPostUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: product.title,
          description: product.description,
          price: product.price
        })
      });

      if (!res.ok) throw new Error("Failed to add item");

      const itemFromBackend = await res.json();

      // Update local cart with backend item
      setCartItems(prev => [...prev, itemFromBackend]);

      // Navigate to cart page
      navigate("/cart");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "8px",
      padding: "1rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img src={product.thumbnail} alt={product.title} style={{ height: "150px", objectFit: "cover", borderRadius: "4px", marginBottom: "0.5rem" }} />
      <h3>{product.title}</h3>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>{product.description}</p>
      <div style={{ fontWeight: "bold", color: "#2874f0", marginBottom: "0.5rem" }}>₹{product.price}</div>
      <button onClick={handleAddToCart} style={{ backgroundColor: "#2874f0", color: "white", border: "none", padding: "0.5rem", borderRadius: "4px", cursor: "pointer" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
