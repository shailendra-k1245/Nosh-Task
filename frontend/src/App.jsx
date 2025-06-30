import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:8000/api/dishes';

function App() {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await axios.get(API);
    setDishes(res.data);
  };

  const toggleDish = async (dishId) => {
    await axios.patch(`${API}/${dishId}/toggle`);
    fetchDishes(); // Refresh
  };

  useEffect(() => {
    fetchDishes();
    const interval = setInterval(fetchDishes, 5000); // simulate real-time
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dish Dashboard</h1>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {dishes.map((dish) => (
          <div key={dish.dishId} style={{
            border: '1px solid #ccc',
            padding: 10,
            width: 200,
            borderRadius: 8,
            backgroundColor: dish.isPublished ? "#e0ffe0" : "#ffe0e0"
          }}>
            <img src={dish.imageUrl} alt={dish.dishName} width="100%" height="100" style={{ objectFit: "cover" }} />
            <h3>{dish.dishName}</h3>
            <p>Status: {dish.isPublished ? '✅ Published' : '❌ Unpublished'}</p>
            <button onClick={() => toggleDish(dish.dishId)}>
              {dish.isPublished ? 'Unpublish' : 'Publish'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
