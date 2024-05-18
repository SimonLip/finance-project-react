// CalculatorEarningItem.jsx
import React from 'react';
import s from './CalculatorEarningItem.module.css'

const CalculatorEarningItem = ({ id, source, amount, currency, selectedCurrency }) => {
    return (
        <div className={s.wrapper}>
            <p>Джерело: {source}, Сума: {amount} {currency}</p>
        </div>
    );
};

export default CalculatorEarningItem;
