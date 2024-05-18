// EarningsCurrencySelect.jsx
import React from 'react';
import s from './EarningsCurrencySelect.module.css';

const EarningsCurrencySelect = ({ value, onChange }) => {
    return (
        <div className={s.wrapper}>
            <label htmlFor="currency">Валюта:</label>
            <select id="currency" value={value} onChange={onChange}>
                <option value="грн">грн</option>
                <option value="долар">долар</option>
                <option value="євро">євро</option>
            </select>
        </div>
    );
};

export default EarningsCurrencySelect;
