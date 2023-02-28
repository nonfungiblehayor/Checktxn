import React from "react";
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
            0x09d5bec1847ae9f7c02a314eaef54e35dd3d09d0d7ea6605406e9a5ed74e64df
            </p>
            <div className={style.txnStatus1}>
                <img src={mark} alt='succes logo'></img>
                <span>success</span>
            </div>
        </div>
        </div>
    </section>
}

export default Txndetail;