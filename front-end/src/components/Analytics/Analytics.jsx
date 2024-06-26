import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnalyticsEarningFilterItem from './AnalyticsEarningFilterItem/AnalyticsEarningFilterItem';
import AnalyticsEarningItem from './AnalyticsEarningItem/AnalyticsEarningItem';
import AnalyticsExpenseFilterItem from './AnalyticsExpenseFilterItem/AnalyticsExpenseFilterItem';
import AnalyticsExpenseItem from './AnalyticsExpenseItem/AnalyticsExpenseItem';
import s from './Analytics.module.css';

const Analytics = () => {
    const [earnings, setEarnings] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [filteredEarnings, setFilteredEarnings] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [selectedEarningIds, setSelectedEarningIds] = useState([]);
    const [selectedExpenseIds, setSelectedExpenseIds] = useState([]);
    const [showEarningDeleteButton, setShowEarningDeleteButton] = useState(false);
    const [showExpenseDeleteButton, setShowExpenseDeleteButton] = useState(false);

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                const response = await axios.get('https://finance-project-back-end.onrender.com/api/earnings');
                setEarnings(response.data);
                setFilteredEarnings(response.data);
                setShowEarningDeleteButton(response.data.length > 0);
            } catch (error) {
                console.error('Помилка отримання даних про доходи:', error);
            }
        };

        const fetchExpenses = async () => {
            try {
                const response = await axios.get('https://finance-project-back-end.onrender.com/api/expenses');
                setExpenses(response.data);
                setFilteredExpenses(response.data);
                setShowExpenseDeleteButton(response.data.length > 0);
            } catch (error) {
                console.error('Помилка отримання даних про витрати:', error);
            }
        };

        fetchEarnings();
        fetchExpenses();
    }, []);

    const handleEarningCheckboxChange = (id) => {
        setSelectedEarningIds((prevIds) => {
            if (prevIds.includes(id)) {
                return prevIds.filter((prevId) => prevId !== id);
            } else {
                return [...prevIds, id];
            }
        });
    };

    const handleExpenseCheckboxChange = (id) => {
        setSelectedExpenseIds((prevIds) => {
            if (prevIds.includes(id)) {
                return prevIds.filter((prevId) => prevId !== id);
            } else {
                return [...prevIds, id];
            }
        });
    };

    const handleDeleteEarningsButtonClick = async () => {
        try {
            await axios.post('https://finance-project-back-end.onrender.com/api/earnings/delete', { ids: selectedEarningIds });
            setEarnings((prevEarnings) => prevEarnings.filter((earning) => !selectedEarningIds.includes(earning._id)));
            setFilteredEarnings((prevEarnings) => prevEarnings.filter((earning) => !selectedEarningIds.includes(earning._id)));
            setSelectedEarningIds([]);
            setShowEarningDeleteButton(false);
        } catch (error) {
            console.error('Помилка видалення доходів:', error);
        }
    };

    const handleDeleteExpensesButtonClick = async () => {
        try {
            await axios.post('https://finance-project-back-end.onrender.com/api/expenses/delete', { ids: selectedExpenseIds });
            setExpenses((prevExpenses) => prevExpenses.filter((expense) => !selectedExpenseIds.includes(expense._id)));
            setFilteredExpenses((prevExpenses) => prevExpenses.filter((expense) => !selectedExpenseIds.includes(expense._id)));
            setSelectedExpenseIds([]);
            setShowExpenseDeleteButton(false);
        } catch (error) {
            console.error('Помилка видалення витрат:', error);
        }
    };

    const handleEarningFilterChange = (selectedSource) => {
        if (selectedSource === '') {
            setFilteredEarnings(earnings);
        } else {
            setFilteredEarnings(earnings.filter(earning => earning.source === selectedSource));
        }
    };

    const handleExpenseFilterChange = (selectedSource) => {
        if (selectedSource === '') {
            setFilteredExpenses(expenses);
        } else {
            setFilteredExpenses(expenses.filter(expense => expense.source === selectedSource));
        }
    };

    return (
        <div className={s.wrapper}>
            <div>
                <AnalyticsEarningFilterItem
                    options={Array.from(new Set(earnings.map((earning) => earning.source)))}
                    onSourceChange={handleEarningFilterChange}
                />
                {filteredEarnings.map((earning, key) => (
                    <AnalyticsEarningItem
                        key={key}
                        earning={earning}
                        isSelected={selectedEarningIds.includes(earning._id)}
                        onCheckboxChange={handleEarningCheckboxChange}
                    />
                ))}
                {showEarningDeleteButton && selectedEarningIds.length > 0 && (
                    <button className={s.button} onClick={handleDeleteEarningsButtonClick}>Видалити обрані доходи</button>
                )}
            </div>
            <div>
                <AnalyticsExpenseFilterItem
                    options={Array.from(new Set(expenses.map((expense) => expense.source)))}
                    onSourceChange={handleExpenseFilterChange}
                />
                {filteredExpenses.map((expense, key) => (
                    <AnalyticsExpenseItem
                        key={key}
                        expense={expense}
                        isSelected={selectedExpenseIds.includes(expense._id)}
                        onCheckboxChange={handleExpenseCheckboxChange}
                    />
                ))}
                {showExpenseDeleteButton && selectedExpenseIds.length > 0 && (
                    <button className={s.button} onClick={handleDeleteExpensesButtonClick}>Видалити обрані витрати</button>
                )}
            </div>
        </div>
    );
};

export default Analytics;
