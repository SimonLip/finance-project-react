// Calculator.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalculatorEarningItem from './CalculatorEarningItem/CalculatorEarningItem';
import CalculatorExpenseItem from './CalculatorExpenseItem/CalculatorExpenseItem';
import CalculatorTotal from './CalculatorTotal/CalculatorTotal';
import s from './Calculator.module.css';

const Calculator = () => {
  const [earnings, setEarnings] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('грн');
  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);

  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/earnings');
        setEarnings(response.data);
      } catch (error) {
        console.error('Помилка отримання даних про доходи:', error);
      }
    };

    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Помилка отримання даних про витрати:', error);
      }
    };

    fetchEarnings();
    fetchExpenses();
  }, []);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/UAH');
        const rates = response.data.rates;
        setUsdRate(rates.USD);
        setEurRate(rates.EUR);
      } catch (error) {
        console.error('Помилка отримання курсу обміну:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <div className={s.calculatorWrapper}>
      <div>
        <h3>Доходи:</h3>
        {earnings.map(earning => (
          <CalculatorEarningItem
            key={earning.id}
            id={earning.id}
            source={earning.source}
            amount={earning.amount}
            currency={earning.currency}
            selectedCurrency={selectedCurrency}
          />
        ))}
      </div>
      <div>
        <h3>Витрати:</h3>
        {expenses.map(expense => (
          <CalculatorExpenseItem
            key={expense.id}
            id={expense.id}
            source={expense.source}
            amount={expense.amount}
            currency={expense.currency}
            selectedCurrency={selectedCurrency}
          />
        ))}
      </div>
      <h3 className={s.calculatorHeader}>Калькулятор:</h3>
      <CalculatorTotal
        earnings={earnings}
        expenses={expenses}
        selectedCurrency={selectedCurrency}
        usdRate={usdRate}
        eurRate={eurRate}
        setSelectedCurrency={setSelectedCurrency}
      />
    </div>
  );
};

export default Calculator;
