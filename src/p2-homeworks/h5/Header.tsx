import React from 'react'
import {NavLink, useMatch} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    const active = useMatch
    return (
        <div className={s.header}>
            <NavLink className={s.link} to={'/pre-junior'}>Pre-Junior</NavLink>
            <NavLink className={s.link} to={'/junior'}>Junior</NavLink>
            <NavLink className={s.link} to={'/junior-plus'}>Junior-Plus</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
