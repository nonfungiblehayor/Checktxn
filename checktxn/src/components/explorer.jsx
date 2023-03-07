import React, { useState } from 'react';
import style from '../App.module.scss';

function Explorer(props) {
    // const [txnValue, txnState] = useState('');
    // const handleChange = event => {
    //     txnState(event.target.value);
    //   };
    return <React.Fragment> <section className={style.explorerSection}>
        <div className={style.inputDiv}>
            <input type='search' className={style.search} onChange={props.fnc2} placeholder='search for any on chain transaction by Txn hash'></input>
            <a href={props.link1}>
                <img src={props.img1} className={style.srcImg} alt='exploring chain logo'></img>
            </a>
        </div>
    </section>
     </React.Fragment>
}
export default Explorer