// ExpenseFormInput.jsx
import React from 'react';

const ExpenseFormInput = ({ label, type, value, onChange, required }) => {
    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <input type={type} id={label} value={value} onChange={onChange} required={required} />
        </div>
    );
};

export default ExpenseFormInput;
