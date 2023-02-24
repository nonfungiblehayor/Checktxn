import style from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Chaintext from './components/chaintext';

function App() {
  return (
    <div className={style.App}>
      <Header /> 
      <section className={style.mainBody}>
        <SubHeader />      
        <Chaintext />  
        </section>   
    </div>
  );
}

export default App;
