// AnalyticsEarningFilterItem.jsx
import React from 'react';
import s from './AnalyticsEarningFilterItem.module.css';

const AnalyticsEarningFilterItem = ({ options, onSourceChange }) => {
    return (
        <div className={s.wrapper}>
            <h2>Доходи:</h2>
            <select onChange={(e) => onSourceChange(e.target.value)}>
                <option value="">Всі</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default AnalyticsEarningFilterItem;
