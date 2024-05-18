// CalculatorTotal.jsx
import React from 'react';
import s from './CalculatorTotal.module.css';

const CalculatorTotal = ({ earnings, expenses }) => {
  // Обчислюємо загальні доходи
  const totalEarnings = earnings.reduce((total, earning) => total + earning.amount, 0);

  // Обчислюємо загальні витрати
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Обчислюємо різницю між доходами та витратами
  const difference = totalEarnings - totalExpenses;

  return (
    <div className={s.wrapper}>
      <h3 className={s.sectionHeader}>Різниця між доходами та витратами:</h3>
      <p>Доходи: {totalEarnings} грн</p>
      <p>Витрати: {totalExpenses} грн</p>
      <p>Загальна різниця: {difference} грн</p>
    </div>
  );
};

export default CalculatorTotal;
