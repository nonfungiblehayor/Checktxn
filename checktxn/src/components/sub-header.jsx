import React from 'react';
import style from '../App.module.scss';
import Ethereum from '../images/Ethereum.webp';
import polygon from '../images/polygon.webp';
import solana from '../images/solana.webp';
import Binance from '../images/Binance.webp';

function SubHeader() {
    return <section className={style.chains}>
    <div className={style.chainDiv}>
        <div className={style.imgDiv}>
            <img src={Ethereum} className={style.eth} alt='eth logo'></img>
        </div>
        <div className={style.txtDiv}>
            <span className={style.fTxt}>ETH</span>
            <p className={style.lTxt}>Ethereum</p>
        </div>
    </div>    
    <div className={style.chainDiv}>
        <div className={style.imgDiv}>
            <img src={polygon} className={style.eth} alt='matic logo'></img>
        </div>
        <div className={style.txtDiv}>
            <span className={style.fTxt}>Matic</span>
            <p className={style.lTxt}>Polygon</p>
        </div>
    </div>    
    <div className={style.chainDiv}>
        <div className={style.imgDiv}>
            <img src={solana} className={style.eth} alt='sol logo'></img>
        </div>
        <div className={style.txtDiv}>
            <span className={style.fTxt}>SOL</span>
            <p className={style.lTxt}>Solana</p>
        </div>
    </div>      
    <div className={style.chainDiv}>
        <div className={style.imgDiv}>
            <img src={Binance} className={style.eth} alt='bnb logo'></img>
        </div>
        <div className={style.txtDiv}>
            <span className={style.fTxt}>BNB</span>
            <p className={style.lTxt}>Binance</p>
        </div>
    </div>             
    </section>
}
export default SubHeader