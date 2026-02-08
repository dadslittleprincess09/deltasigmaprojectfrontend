import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { setCartItems } = useContext(CartContext);
const handleAddToCart = async () => {
  try {
    const backendPostUrl = import.meta.env.VITE_BACKEND_POST;

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

    // ✅ add to cart (stay on same page)
    // setCartItems(prev => [...prev, itemFromBackend]);
   setCartItems(prev => [
  ...prev,
  {
    ...itemFromBackend,
    thumbnail: product.thumbnail // ✅ frontend image
  }
]);

  } catch (err) {
    console.error(err);
  }
};

  return (
    <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "1rem" }}>
      <img src={product.thumbnail} alt={product.title} style={{ height: "150px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div style={{ fontWeight: "bold", color: "#2874f0" }}>₹{product.price}</div>
      <button onClick={handleAddToCart} style={{ backgroundColor: "#2874f0", color: "#fff", padding: "0.5rem", borderRadius: "4px" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
