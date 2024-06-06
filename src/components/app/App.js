import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Header from '../header/header';
import Main from '../main/main';
import data from '../../redux/data';

import style from './App.module.scss';

function App() {
  let tickets = useSelector((state) => state.tickets);
  const getData = data();

  useEffect(() => {
    getData();
  }, [tickets]);

  return (
    <section className={style.app}>
      <Header />
      <Main />
    </section>
  );
}

export default App;
