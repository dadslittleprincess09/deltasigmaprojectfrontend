import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav style={{
      backgroundColor: "#2874f0",
      color: "white",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>DeltaSigma Shop</h2>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
