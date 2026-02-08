function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298)",
        color: "#fff",
        padding: "0.9rem",
        textAlign: "center",
        fontSize: "0.9rem",
        marginTop: "2rem"
      }}
    >
      <strong>
        DeltaSigma<span style={{ color: "#ffe500" }}>Shop</span>
      </strong>
      <span style={{ marginLeft: "6px", opacity: 0.85 }}>
        © All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
