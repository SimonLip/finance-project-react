import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './Expense.module.css';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('грн');

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Помилка отримання даних про витрати:', error);
      }
    };

    fetchExpenses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpense = { source, amount, currency };

    try {
      await axios.post('http://localhost:4000/api/expenses/add', newExpense);
      setExpenses([...expenses, newExpense]);
      setSource('');
      setAmount('');
    } catch (error) {
      console.error('Помилка додавання витрати:', error);
    }
  };

  return (
    <div className={s.wrapper}>
      <h2>Витрати:</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <input className={s.input} type="text" value={source} onChange={(e) => setSource(e.target.value)} placeholder="Джерело" required />
        </div>
        <div>
        <input className={s.input} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Сума" required />
        </div>
        <div>
        <select className={s.select} value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="грн">Гривень</option>
          <option value="USD">Доларів</option>
          <option value="EUR">Євро</option>
        </select>
        </div>
        <button className={s.submit} type="submit">Додати витрату</button>
      </form>
    </div>
  );
};

export default Expenses;
