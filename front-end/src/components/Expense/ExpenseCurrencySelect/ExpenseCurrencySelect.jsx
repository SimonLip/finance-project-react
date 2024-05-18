// ExpenseCurrencySelect.jsx
import React from 'react';

const ExpenseCurrencySelect = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="currency">Валюта:</label>
            <select id="currency" value={value} onChange={onChange}>
                <option value="грн">грн</option>
                <option value="долар">долар</option>
                <option value="євро">євро</option>
            </select>
        </div>
    );
};

export default ExpenseCurrencySelect;
