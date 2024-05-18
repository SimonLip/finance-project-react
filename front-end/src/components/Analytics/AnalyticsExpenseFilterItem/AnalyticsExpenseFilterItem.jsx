// AnalyticsExpenseFilterItem.jsx
import React from 'react';
import s from './AnalyticsExpenseFilterItem.module.css';

const AnalyticsExpenseFilterItem = ({ options, onSourceChange }) => {
    return (
        <div className={s.wrapper}>
            <h2>Витрати:</h2>
            <select onChange={(e) => onSourceChange(e.target.value)}>
                <option value="">Всі</option>
                {options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default AnalyticsExpenseFilterItem;
