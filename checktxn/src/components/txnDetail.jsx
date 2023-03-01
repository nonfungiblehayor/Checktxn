import React, { useState } from "react";
import style from '../App.module.scss';
import mark from '../images/mark.webp';

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
                <div className={style.txnStatus1}>
                <img src={mark} alt='succes logo'></img>
                <span>success</span>
            </div> :
             <div className={style.txnStatus1}>
                <img src={mark} alt='succes logo'></img>
                <span>failed</span>
            </div>          
            
            }
        </div>
        </div>
    </section>
}

export default Txndetail;