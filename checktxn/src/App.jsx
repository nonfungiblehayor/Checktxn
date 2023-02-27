import style from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Chaintext from './components/chaintext';
import Explorer from './components/explorer';
import { useState } from 'react';

function App() {
  const [chains, chainState] = useState('Matic');

  const changeState1 = () => {
    chainState('ETH');
  }

  const changeState2 = () => {
    chainState('Matic');
  }

  const changeState3 = () => {
    chainState('SOL');
  }

  const changeState4 = () => {
    chainState('BNB');
  }
  return (
    <div className={style.App}>
      <Header /> 
      <section className={style.mainBody}>
        <SubHeader fnc1={changeState1} fnc2={changeState2} fnc3={changeState3} fnc4={changeState4}/>      
        <Chaintext txt1={chains}/>
        <Explorer />  
        </section>   
    </div>
  );
}

export default App;
