/*eslint-disable*/
import { useSelector } from 'react-redux';
import Header from '../header/header';
import Main from '../main/main';
import style from './App.module.scss';
import { useEffect } from 'react';
import  data  from '../../redux/data';


function App() {
  let id = useSelector(state => state.tickets);
  
  const getData = data();
  
  useEffect(() => {
    getData()
  }, [data]);


  return(
    <section className={style.app}>
      <Header />
      <Main />
     </section>
  ) 
}

export default App;
