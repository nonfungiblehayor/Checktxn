import style from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Chaintext from './components/chaintext';
import Explorer from './components/explorer';

function App() {
  return (
    <div className={style.App}>
      <Header /> 
      <section className={style.mainBody}>
        <SubHeader />      
        <Chaintext />
        <Explorer />  
        </section>   
    </div>
  );
}

export default App;
