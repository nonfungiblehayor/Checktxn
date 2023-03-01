import React, { useState } from "react";
import style from '../App.module.scss';
import mark from '../images/mark.webp';
import red from '../images/red.webp';

function Txndetail(props) {
    return <section className={style.txnSection}>
        <div className={style.txnContainer}>
        <div className={style.div1}>
            <p>
                Transaction hash:
            </p>
            <p>
                Status:
            </p>           
        </div>
        <div className={style.div2}>            
            <p>
            {props.hashVal}
            </p>
            {  props.stat ? 
            <div className={props.txnStat === '1' ? style.txnStatus1 : style.txnStatus2}>
            {props.txnStat === '1' ? <img src={mark} alt='succes logo'></img> : <img src={red} alt='fail logo'></img>}    
            {props.txnStat === '1' ?  <span>success</span> :  <span>failed</span>}   
            </div> :
            ""       
            
            }
        </div>
        </div>
    </section>
}

export default Txndetail;