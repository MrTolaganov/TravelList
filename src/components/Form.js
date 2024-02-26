import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!description.trim()) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  const onInputHandler = e => setDescription(e.target.value);
  const onSelectHandler = e => setQuantity(+e.target.value);

  return (
    <form className="add-form" onSubmit={onSubmitHandler}>
      <h3>What do you need for your 😍 trip?</h3>

      <select value={quantity} onChange={onSelectHandler}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={onInputHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
}
