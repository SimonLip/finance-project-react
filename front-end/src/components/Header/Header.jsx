import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from './Header.module.css';

const Header = () => {

    const location = useLocation();

    const getLinkClassName = (path) => {
    return location.pathname === path ? s.active : s.inactive;
  };

    return (
        <header className={s.header}>
            <NavLink to="./" className={getLinkClassName("/App.jsx")}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3vqigKpPo7imvsC27bRuZFfsu_dd43LqdgayBSd1uOg&s' alt="#" />
            </NavLink>
        </header>
    );
}

export default Header;
