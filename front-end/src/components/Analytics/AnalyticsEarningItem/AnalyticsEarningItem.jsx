import React, { useState } from 'react';
import s from './AnalyticsEarningItem.module.css';

const AnalyticsEarningItem = ({ earning, onCheckboxChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        onCheckboxChange(earning._id, !checked);
    };

    return (
        <div className={`${s.wrapper} ${checked ? s.selected : ''}`}>
            <div>
            <input className={s.checkbox} type="checkbox" checked={checked} onChange={handleCheckboxChange} />
            </div>
            <div className={s.item}>
                <h3>Джерело: {earning.source}</h3>
                <p>Сума: {earning.amount} {earning.currency}</p>
            </div>
        </div>
    );
};

export default AnalyticsEarningItem;