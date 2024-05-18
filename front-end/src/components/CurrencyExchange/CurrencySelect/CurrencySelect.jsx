import React from 'react';
import s from './CurrencySelect.module.css'

const CurrencySelect = ({ label, value, onChange }) => {
    return (
        <div className={s.wrapper}>
            <label htmlFor={label}>{label}:</label>
            <select id={label} value={value} onChange={onChange}>
                <option value="UAH">Гривня</option>
                <option value="USD">Долар</option>
                <option value="EUR">Євро</option>
            </select>
        </div>
    );
};

export default CurrencySelect;
