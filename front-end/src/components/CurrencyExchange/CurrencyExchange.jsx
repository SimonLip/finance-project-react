// Settings.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyExchangeRate from './CurrencyExchangeRate/CurrencyExchangeRate';
import CurrencySelect from './CurrencySelect/CurrencySelect';
import s from './CurrencyExchange.module.css'

const CurrencyExchange = () => {
    const [usdRate, setUsdRate] = useState(null);
    const [eurRate, setEurRate] = useState(null);
    const [selectedFromCurrency, setSelectedFromCurrency] = useState('UAH');
    const [selectedToCurrency, setSelectedToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/UAH');
                const rates = response.data.rates;
                setUsdRate(rates.USD);
                setEurRate(rates.EUR);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchExchangeRates();
    }, []);

    const handleFromCurrencyChange = (e) => {
        setSelectedFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setSelectedToCurrency(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(parseFloat(e.target.value));
    };

    return (
        <div className={s.wrapper}>
            <h2>Курси валют:</h2>
            <CurrencySelect label="Від" value={selectedFromCurrency} onChange={handleFromCurrencyChange} />
            <CurrencySelect label="До" value={selectedToCurrency} onChange={handleToCurrencyChange} />
            <div>
                <label htmlFor="amount">Введіть кількість:</label>
                <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
            </div>
            <CurrencyExchangeRate
                amount= {amount}
                fromCurrency={selectedFromCurrency}
                toCurrency={selectedToCurrency}
                usdRate={usdRate}
                eurRate={eurRate}
            />
        </div>
    );
};

export default CurrencyExchange;
