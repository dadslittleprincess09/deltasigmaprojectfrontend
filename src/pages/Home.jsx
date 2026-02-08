import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); 
          gap: 1rem;
          justify-items: center;
        }

        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr); 
          }
        }

        @media (max-width: 600px) {
          .product-grid {
            grid-template-columns: 1fr; /* Mobile */
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
