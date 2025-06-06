import { useState } from 'react';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import Logo from './logo';

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'are you sure you want to clear the list?'
    );
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// function Logo() {
//   return <h1>Far Away</h1>;
// }
// function Form({ onAddItems }) {
//   const [description, setDescription] = useState('');

//   const [quantity, setQuantity] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItem = {
//       description,
//       quantity,
//       packed: false,
//       id: Date.now(),
//     };

//     console.log(newItem);

//     onAddItems(newItem);

//     setDescription('');
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>what do you need for your trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }
// function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
//   const [sortBy, setSortBy] = useState('input');
//   let sortedItems;
//   if (sortBy === 'input') sortedItems = items;
//   if (sortBy === 'description')
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));
//   if (sortBy === 'packed')
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));

//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             item={item}
//             key={item.id}
//             onDeleteItems={onDeleteItems}
//             onToggleItems={onToggleItems}
//           />
//         ))}
//       </ul>
//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">Sort by input order</option>
//           <option value="description">Sort by description order</option>
//           <option value="packed">Sort by packed status</option>
//         </select>
//         <button onClick={onClearList}>Clear list</button>
//       </div>
//     </div>
//   );
// }

// function Item({ item, onDeleteItems, onToggleItems }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => onToggleItems(item.id)}
//       />
//       <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
//         {item.description}
//         {item.quantity}
//       </span>
//       <button onClick={() => onDeleteItems(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({ items }) {
//   if (!items.length)
//     return (
//       <p className="stats">
//         <em>start adding some items</em>
//       </p>
//     );

//   const numItems = items.length;
//   const numPacked = items.filter((item) => item.packed).length;
//   const percentage = Math.round((numPacked / numItems) * 100);
//   return (
//     <footer className="stats">
//       <em>
//         {percentage === 100
//           ? 'you have everything! ready to go'
//           : `you have ${numItems} items in your list, and you have already packed ${''}
//         ${numPacked} items ${percentage + '%'}`}
//       </em>
//     </footer>
//   );
// }

export default App;
