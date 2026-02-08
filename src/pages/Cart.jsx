import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
          {cartItems.map(item => (
            <div key={item.id} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
              <img src={item.thumbnail} alt={item.name} style={{ height: "150px", objectFit: "cover", borderRadius: "4px", marginBottom: "0.5rem" }} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div style={{ fontWeight: "bold", color: "#2874f0" }}>₹{item.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
