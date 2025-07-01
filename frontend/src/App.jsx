import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishList from './components/Dishlist';

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
    const interval = setInterval(fetchDishes, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dish Dashboard</h1>
      <DishList dishes={dishes} onToggle={toggleDish} />
    </div>
  );
}

export default App;
