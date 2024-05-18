// SettingsExchangeRate.jsx
import React from 'react';
import s from './CurrencyExchangeRate.module.css'

const CurrencyExchangeRate = ({ amount, fromCurrency, toCurrency, usdRate, eurRate }) => {
    
    if (usdRate === null || eurRate === null) {
        return amount;
    }
    
    const calculateExchangeRate = () => {
        let exchangeRate = amount;

        if (fromCurrency === 'UAH' && toCurrency === 'USD') exchangeRate *= usdRate;
        else if (fromCurrency === 'USD' && toCurrency === 'UAH') exchangeRate /= usdRate;
        else if (fromCurrency === 'UAH' && toCurrency === 'EUR') exchangeRate *= eurRate;
        else if (fromCurrency === 'EUR' && toCurrency === 'UAH') exchangeRate /= eurRate;
        else if (fromCurrency === 'USD' && toCurrency === 'EUR') exchangeRate /= usdRate / eurRate;
        else if (fromCurrency === 'EUR' && toCurrency === 'USD') exchangeRate /= eurRate / usdRate;

        return exchangeRate.toFixed(2);
    };

    return (
        <div className={s.wrapper}>
            <p>{amount} {fromCurrency} = {calculateExchangeRate()} {toCurrency}</p>
        </div>
    );
};

export default CurrencyExchangeRate;
