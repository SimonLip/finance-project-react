import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Earnings = () => {
  const [earnings, setEarnings] = useState([]);
  const [newEarning, setNewEarning] = useState({ source: '', amount: 0, currency: '' });

  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        const response = await axios.get('https://finance-project-back-end.onrender.com/api/earnings');
        setEarnings(response.data);
      } catch (error) {
        console.error('Помилка отримання даних про доходи:', error);
      }
    };

    fetchEarnings();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://finance-project-back-end.onrender.com/api/earnings/add', newEarning);
      setEarnings([...earnings, newEarning]);
      setNewEarning({ source: '', amount: 0, currency: '' });
    } catch (error) {
      console.error('Помилка додавання доходу:', error);
    }
  };

  return (
    <div>
      <h2>Earnings</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={newEarning.source}
          onChange={(e) => setNewEarning({ ...newEarning, source: e.target.value })}
          placeholder="Source"
        />
        <input
          type="number"
          value={newEarning.amount}
          onChange={(e) => setNewEarning({ ...newEarning, amount: e.target.value })}
          placeholder="Amount"
        />
        <input
          type="text"
          value={newEarning.currency}
          onChange={(e) => setNewEarning({ ...newEarning, currency: e.target.value })}
          placeholder="Currency"
        />
        <button type="submit">Add Earning</button>
      </form>
      <ul>
        {earnings.map((earning, index) => (
          <li key={index}>
            {earning.source}: {earning.amount} {earning.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Earnings;
