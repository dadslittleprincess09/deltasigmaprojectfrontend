import { useState } from "react";

function AddItemForm({ backendUrl, onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const addItem = async () => {
    if (!name || !description || !price) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          price: Number(price)
        })
      });

      if (!res.ok) throw new Error("Failed to add item");

      const newItem = await res.json();
      onAdd(newItem); // optionally update cart or UI
      setName(""); setDescription(""); setPrice("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default AddItemForm;
