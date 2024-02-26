import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "../index.css";

export default function App() {
  const [items, setItems] = useState([]);

  const onAddItems = item => setItems(items => [...items, item]);

  const onUpdateItems = id =>
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  const onDeleteItems = id =>
    setItems(items => items.filter(item => item.id !== id));

  const onClearItems = () => {
    const confirmed = window.confirm("Are you sure to delete all items?");

    if (!confirmed) return;

    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={onAddItems} />
      <PackingList
        items={items}
        onUpdateItems={onUpdateItems}
        onDeleteItems={onDeleteItems}
        onClearItems={onClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
