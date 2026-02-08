import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const totalQty = cartItems.reduce(
    (total, item) => total + (item.qty || 1),
    0,
  );

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
        color: "#fff",
        padding: "0.8rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#fff",
          fontSize: "1.3rem",
          fontWeight: "700",
          letterSpacing: "0.5px",
        }}
      >
        DeltaSigma<span style={{ color: "#ffe500" }}>Shop</span>
      </Link>

      <Link
        to="/cart"
        style={{
          position: "relative",
          textDecoration: "none",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "1rem",
          fontWeight: "500",
          padding: "6px 12px",
          borderRadius: "6px",
          transition: "background 0.2s",
        }}
      >
        <span>Cart</span>

        {totalQty > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-6px",
              right: "-6px",
              background: "#681818",
              color: "#fff",
              borderRadius: "50%",
              height: "20px",
              minWidth: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: "700",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            {totalQty}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
