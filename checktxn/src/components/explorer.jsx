import React from 'react';
import style from '../App.module.scss';

function Explorer(props) {
    return <section className={style.explorerSection}>
        <div className={style.inputDiv}>
            <input type='search' className={style.search} value='' placeholder='search for any onchain transaction'></input>
            <a href='/'>
                <img src={props.img1} className={style.srcImg} alt='exploring chain logo'></img>
            </a>
        </div>
    </section>
}
export default Explorer