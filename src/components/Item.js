export default function Item({ item, onUpdateItems, onDeleteItems }) {
  const { id, description, quantity, packed } = item;

  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onUpdateItems(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItems(id)}>❌</button>
    </li>
  );
}
