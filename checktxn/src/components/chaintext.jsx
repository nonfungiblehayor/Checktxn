import React from 'react';
import style from '../App.module.scss';

function Chaintext(props) {
    return <section className={style.chainTxt}>
        <div className={style.exploreTxt}>
            <h1>
                {props.txt1} blockchain explorer
            </h1>
        </div>
    </section>
}

export default Chaintext