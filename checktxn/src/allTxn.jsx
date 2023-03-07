import React from "react";
import style from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Chaintext from './components/chaintext';
import Explorer from './components/explorer';
import { useState } from 'react';
import ETH from './images/Ethereum.webp';
import Matic from './images/polygon.webp';
import BNB from './images/Binance.webp';
import solana from './images/solana.webp';
import DataResult from "./components/dataResult";

function AllTxn() {
  const [chains, chainState] = useState('Matic');
  const [chainImg, chainImgState] = useState(Matic);
  const [chainLink, chainLinkState] = useState('https://polygonscan.com/')
  const [txnValue, txnState] = useState('');
  const [txn, txnSetting] = useState('');
  const [hashValue, hash] = useState('')
  const [success, successState] = useState(false);

  const handleState = () => {
    successState(!success);
    console.log(success)
  }

    
    const handleChange = async event => {
        txnState(event.target.value);
        if(chainLink === 'https://etherscan.io/tx/') {
          chainLinkState(`https://etherscan.com/tx/${event.target.value}`)
          let response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${event.target.value}&startblock=0&endblock=99999999&page=1&offset=10 &sort=asc&apikey=PBA7B9N9ZZR8UMSN7S5C16Q1YWXAZAUQBU`)
          let data = await response.json();
          console.log(data)
          // if(data.result.status === '1') {
          //   txnSetting(data.result.status);
          //   hash(event.target.value);
          //   console.log(txn)
          //   console.log(hashValue)
          //   handleState()
          // } else {
          //   hash(event.target.value);
          //   handleState()  
          // }     
        } else if(chainLink === 'https://polygonscan.com/tx/') {
          chainLinkState(`https://polygonscan.com/tx/${event.target.value}`)
          let response = await fetch(`https://api.polygonscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=${event.target.value}&apikey=NTY3TXWBF26IDF2GT43MTKDPHZTIBGDA1Q`)
          let data = await response.json();
          if(data.result.status === '1') {
            txnSetting(data.result.status);
            hash(event.target.value);
            console.log(txn)
            console.log(hashValue)
            handleState()
          } else {
            hash(event.target.value);
            handleState()
          }     
        } else if(chainLink === 'https://solscan.io/tx/') {
          chainLinkState(`https://solscan.io/tx/${event.target.value}`)
          let response = await fetch(`https://public-api.solscan.io/transaction/${event.target.value}`)
          console.log(response)
        } else if(chainLink === 'https://bscscan.com/tx/') {
          chainLinkState(`https://bscscan.com/tx/${event.target.value}`)
          let response = await fetch(`https://api.bscscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=${event.target.value}&apikey=PS4NMI5W8YT3QI68PYBYNJ7CZFA39A4GS3`)
          let data = await response.json();
          if(data.result.status === '1') {
            txnSetting(data.result.status);
            hash(event.target.value);
            console.log(txn)
            console.log(hashValue)
            handleState()
          } else {
            hash(event.target.value);
            handleState()
          }                      
        }
      };

  const changeState1 = () => {
    chainState('ETH');
    chainImgState(ETH);
    chainLinkState('https://etherscan.io/tx/');
    console.log(chainLink)
  }

  const changeState2 = () => {
    chainState('Matic');
    chainImgState(Matic);
    chainLinkState('https://polygonscan.com/tx/')
    console.log(chainLink)
  }

  const changeState3 = () => {
    chainState('SOL');
    chainImgState(solana);
    chainLinkState(`https://solscan.io/tx/${txnValue}`)
    console.log(chainLink)
  }

  const changeState4 = () => {
    chainState('BNB');
    chainImgState(BNB);
    chainLinkState(`https://bscscan.com/tx/${txnValue}`)
  }

    return <section className={style.bodySection}>
         <Header /> 
      <section className={style.mainBody}>
        <SubHeader fnc1={changeState1} fnc2={changeState2} fnc3={changeState3} fnc4={changeState4}/>      
        <div className={style.verifytxn}>
        <h2>check your last 5 on chain transactions</h2>
        </div>
        <Explorer img1={chainImg} link1={chainLink} fnc2={handleChange}/> 
        <div className={style.verifytxn}>
        <h2>Transaction history</h2>
        </div>
        <DataResult />
        </section>   
    </section>
}
export default AllTxn