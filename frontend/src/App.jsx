import React, { useEffect, useState } from 'react';

const backendUrl = typeof API_URL !== 'undefined' ? API_URL : '';

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!backendUrl) return;
    fetch(`${backendUrl}/api/items`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>test-node-fullstack frontend</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
