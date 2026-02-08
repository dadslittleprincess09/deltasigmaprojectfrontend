import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addItem } = useContext(CartContext);
  const [showMore, setShowMore] = useState(false);

  const handleAddToCart = async () => {
    try {
      const backendPostUrl = import.meta.env.VITE_BACKEND_POST;

      const res = await fetch(backendPostUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: product.title,
          description: product.description,
          price: product.price,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      const backendItem = await res.json();

      addItem({
        id: product.id,
        name: backendItem.name,
        description: backendItem.description,
        price: backendItem.price,
        image: product.thumbnail,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "1rem",
        width: "260px",
        height: "420px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-4px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >

      <div
        style={{
          height: "170px",
          background: "#f6f7f9",
          borderRadius: "10px",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "0.6rem",
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          marginBottom: "0.3rem",
        }}
      >
        {product.title}
      </h3>

      
      <p
        style={{
          fontSize: "0.85rem",
          color: "#555",
          lineHeight: "1.4",
          marginBottom: "0.3rem",
        }}
      >
        {showMore
          ? product.description
          : product.description.slice(0, 60) + "..."}
        <span
          onClick={() => setShowMore(!showMore)}
          style={{
            color: "#2874f0",
            cursor: "pointer",
            fontWeight: "500",
            marginLeft: "4px",
          }}
        >
          {showMore ? "Read less" : "Read more"}
        </span>
      </p>

      
      <strong
        style={{
          fontSize: "1.1rem",
          color: "#222",
          marginBottom: "0.5rem",
        }}
      >
        ₹{product.price}
      </strong>

  
      <button
        onClick={handleAddToCart}
        style={{
          padding: "10px",
          background: "linear-gradient(90deg, #1e3c72, #2a5298)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "0.95rem",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
