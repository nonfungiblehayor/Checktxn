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
import Txndetail from './components/txnDetail';

function App() {
  const [chains, chainState] = useState('Matic');
  const [chainImg, chainImgState] = useState(Matic);
  const [chainLink, chainLinkState] = useState('https://polygonscan.com/')
  const [txnValue, txnState] = useState('');

    
    const handleChange = async event => {
        txnState(event.target.value);
        if(chainLink === 'https://etherscan.io/tx/') {
          chainLinkState(`https://etherscan.com/tx/${event.target.value}`)
          let response = await fetch(`https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${event.target.value}&apikey=PBA7B9N9ZZR8UMSN7S5C16Q1YWXAZAUQBU`)
          let data = await response.json();
          let rcvData = data.result.status;
          console.log(rcvData)
        } else if(chainLink === 'https://polygonscan.com/tx/') {
          chainLinkState(`https://polygonscan.com/tx/${event.target.value}`)
        } else if(chainLink === 'https://solscan.io/tx/') {
          chainLinkState(`https://solscan.io/tx/${event.target.value}`)
        } else if(chainLink === 'https://bscscan.com/tx/') {
          chainLinkState(`https://bscscan.com/tx/${event.target.value}`)                    
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
  return (
    <div className={style.App}>
      <Header /> 
      <section className={style.mainBody}>
        <SubHeader fnc1={changeState1} fnc2={changeState2} fnc3={changeState3} fnc4={changeState4}/>      
        <Chaintext txt1={chains}/>
        <Explorer img1={chainImg} link1={chainLink} fnc2={handleChange}/>  
        <Txndetail />
        </section>   
    </div>
  );
}

export default App;
