import React from "react";
import style from '../App.module.scss'
import logo from '../images/logo.webp'

function Header() {
    return <header className={style.header}>
        <div className={style.headerDiv1}>
            <a href='/'>
                <img src={logo} alt='logo img' className={style.logoImg}></img>
            </a>
            <span className={style.logoName}>Checktxn</span>
        </div>
        <div className={style.headerDiv2}>
            <a href='/'>Home</a>
            <a href='/'>Verify txn</a>
            <a href='/'>About</a>
        </div>
        <div className={style.headerDiv3}>
            <button className={style.btnStyle}>Connect your wallet</button>
        </div>
    </header>
}
export default Header 