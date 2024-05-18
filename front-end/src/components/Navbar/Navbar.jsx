// Navbar.jsx
import React from "react";
import s from './Navbar.module.css';
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path ? s.active : s.inactive;
  };

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/earnings" className={getLinkClassName("/earnings")}>Доходи</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/expense" className={getLinkClassName("/expense")}>Витрати</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/calculator" className={getLinkClassName("/calculator")}>Калькулятор</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/analytics" className={getLinkClassName("/analytics")}>Аналітика</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/currencyExchange" className={getLinkClassName("/currencyExchange")}>Обмін</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
