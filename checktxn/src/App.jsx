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

function App() {
  const [chains, chainState] = useState('Matic');
  const [chainImg, chainImgState] = useState(Matic);

  const changeState1 = () => {
    chainState('ETH');
    chainImgState(ETH)
  }

  const changeState2 = () => {
    chainState('Matic');
    chainImgState(Matic)
  }

  const changeState3 = () => {
    chainState('SOL');
    chainImgState(solana)
  }

  const changeState4 = () => {
    chainState('BNB');
    chainImgState(BNB)
  }
  return (
    <div className={style.App}>
      <Header /> 
      <section className={style.mainBody}>
        <SubHeader fnc1={changeState1} fnc2={changeState2} fnc3={changeState3} fnc4={changeState4}/>      
        <Chaintext txt1={chains}/>
        <Explorer img1={chainImg}/>  
        </section>   
    </div>
  );
}

export default App;
