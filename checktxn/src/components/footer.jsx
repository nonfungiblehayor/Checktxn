import React, { useState, useEffect } from "react";
import style from '../App.module.scss';
import Linkedin from '../images/linkedin.webp';
import github from '../images/github.webp';


function Footer() {
    return <footer className={style.footerSection}>
        <p>
            Made with 💝 by nonfungibleayo 
        </p>
        <a href="github.com/nonfungiblehayor"> <img src={github} alt='github logo'></img> </a>
        <a href=''><img src={Linkedin} alt='linkedin logo'></img></a>
    </footer>
}
export default Footer