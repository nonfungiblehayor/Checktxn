import React from "react";
import style from '../App.module.scss';
import mark from '../images/mark.webp';

function Txndetail() {
    const hash = '0x7600f6e76894dc7d928132d0aabe01e7d6e1171fbbc2f1798c25d582aa3858e0'
    async function getTxn()  {
        let response = await fetch(`https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${hash}&apikey=PBA7B9N9ZZR8UMSN7S5C16Q1YWXAZAUQBU`)
        let data = await response.json();
        let rcvData = data.result.status;
        console.log(rcvData) 
    }
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
        <button onClick={getTxn}>gt</button>
    </section>
}

export default Txndetail;