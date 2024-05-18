// AnalyticsExpenseItem.jsx
import React, { useState } from 'react';
import s from './AnalyticsExpenseItem.module.css';

const AnalyticsExpenseItem = ({ expense, onCheckboxChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        onCheckboxChange(expense._id, !checked);
    };

    return (
        <div className={`${s.wrapper} ${checked ? s.selected : ''}`}>
            <div>
            <input className={s.checkbox} type="checkbox" checked={checked} onChange={handleCheckboxChange} />
            </div>
            <div className={s.item}>
                <h3>Джерело: {expense.source}</h3>
                <p>Сума: {expense.amount} {expense.currency}</p>
            </div>
        </div>
    );
};

export default AnalyticsExpenseItem;