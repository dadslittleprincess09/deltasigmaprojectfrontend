import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, increase, decrease, remove } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  return (
    <div style={{ padding: "2rem", background: "#f5f7fa", minHeight: "80vh" }}>
      <style>{`
  @media (max-width: 450px) {
    .cart-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .cart-img {
      width: 100% !important;
      height: 180px !important;
    }

    .cart-actions {
      justify-content: center;
      flex-wrap: wrap;
    }

    .delete-btn {
      margin-left: 0 !important;
      margin-top: 0.6rem;
      width: 100%;
    }

    .total-btn {
      width: 100%;
    }
  }
`}</style>

      {cartItems.length === 0 && <p>No items in cart</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="cart-card"
          style={{
            display: "flex",
            gap: "1.5rem",
            background: "#fff",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="cart-img"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>

            <p style={{ color: "#555", fontSize: "0.9rem" }}>
              {item.description}
            </p>

            <strong style={{ color: "#2874f0" }}>
              ₹{item.price * item.qty}
            </strong>

            <div
              className="cart-actions"
              style={{
                marginTop: "0.8rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <button
                onClick={() => decrease(item.id)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  background: "#fff",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                −
              </button>

              <span
                style={{
                  minWidth: "28px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {item.qty}
              </span>

              <button
                onClick={() => increase(item.id)}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  background: "#fff",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                +
              </button>

              <button
                className="delete-btn"
                onClick={() => remove(item.id)}
                style={{
                  marginLeft: "1rem",
                  padding: "6px 12px",
                  background: "#ff4d4f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            className="total-btn"
            style={{
              padding: "14px 24px",
              background: "#1f3f76",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Total: ₹{totalPrice}
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
