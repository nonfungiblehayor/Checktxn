import style from './App.module.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';

function App() {
  return (
    <div className={style.App}>
      <Header /> 
      <section className={style.mainBody}>
        <SubHeader />        
        </section>   
    </div>
  );
}

export default App;
