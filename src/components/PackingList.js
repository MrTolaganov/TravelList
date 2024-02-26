import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onUpdateItems,
  onDeleteItems,
  onClearItems,
}) {
  const [sortedBy, setSortedBy] = useState("input");

  const onSortedBy = e => setSortedBy(e.target.value);

  let sortedItems = [];

  if (sortedBy === "input") sortedItems = items;

  if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            key={item.id}
            onUpdateItems={onUpdateItems}
            onDeleteItems={onDeleteItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortedBy} onChange={onSortedBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed list</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
}
