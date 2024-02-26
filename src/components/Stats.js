export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter(item => item.packed).length;
  const numPercentage = Math.round((numPackedItems / numItems) * 100);

  if (!numItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list📃</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything! Ready to go✈️"
          : `👜 You have ${numItems} items on your list and you already packed 
        ${numPackedItems} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
