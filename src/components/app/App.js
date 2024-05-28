/*eslint-disable*/
import Header from '../header/header';
import Main from '../main/main';
import style from './App.module.scss';


function App() {
  
  return(
    <section className={style.app}>
      <Header />
      <Main />
     </section>
  ) 
}

export default App;
