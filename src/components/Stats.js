import React from 'react';

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'you have everything! ready to go'
          : `you have ${numItems} items in your list, and you have already packed ${''}
          ${numPacked} items ${percentage + '%'}`}
      </em>
    </footer>
  );
}

export default Stats;
