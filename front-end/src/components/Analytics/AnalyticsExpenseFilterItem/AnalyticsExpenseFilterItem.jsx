// AnalyticsExpenseFilterItem.jsx
import React from 'react';
import s from './AnalyticsExpenseFilterItem.module.css';

const AnalyticsExpenseFilterItem = ({ options, onSourceChange }) => {
    const handleSourceChange = (e) => {
        const selectedSource = e.target.value;
        onSourceChange(selectedSource);
    };

    return (
        <div className={s.wrapper}>
            <h2>Витрати:</h2>
            <select onChange={handleSourceChange}>
                <option value="">Всі</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default AnalyticsExpenseFilterItem;
