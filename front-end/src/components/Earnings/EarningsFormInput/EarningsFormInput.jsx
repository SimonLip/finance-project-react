// EarningsFormInput.jsx
import React from 'react';
import s from 'EarningsFormInput.module.css';

const EarningsFormInput = ({ label, type, value, onChange, required }) => {
    return (
        <div className={s.wrapper}>
            <label htmlFor={label}>{label}:</label>
            <input type={type} id={label} value={value} onChange={onChange} required={required} />
        </div>
    );
};

export default EarningsFormInput;
