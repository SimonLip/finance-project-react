// AnalyticsEarningFilterItem.jsx
import React from 'react';
import s from './AnalyticsEarningFilterItem.module.css';

const AnalyticsEarningFilterItem = ({ options, onSourceChange }) => {
    const handleSourceChange = (e) => {
        const selectedSource = e.target.value;
        onSourceChange(selectedSource);
    };

    return (
        <div className={s.wrapper}>
            <h2>Доходи:</h2>
            <select onChange={handleSourceChange}>
                <option value="">Всі</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default AnalyticsEarningFilterItem;
