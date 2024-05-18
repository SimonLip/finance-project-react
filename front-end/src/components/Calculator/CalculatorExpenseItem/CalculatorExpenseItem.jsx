// CalculatorExpenseItem.jsx
import React from 'react';
import s from './CalculatorExpenseItem.module.css'

const CalculatorExpenseItem = ({ id, source, amount, currency, selectedCurrency }) => {
    return (
        <div className={s.wrapper}>
            <p>Джерело: {source}, Сума: {amount} {currency}</p>
        </div>
    );
};

export default CalculatorExpenseItem;
