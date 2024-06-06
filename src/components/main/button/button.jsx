import { useState } from 'react';
import { useDispatch } from 'react-redux';

import style from './button.module.scss';

const Button = () => {
  const [active, setActive] = useState({ price: false, fast: false });
  let dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.dataset.count === '1') {
      dispatch({ type: 'sortPrice' });
      setActive({ price: true, fast: false });
    }
    if (e.target.dataset.count === '2') {
      dispatch({ type: 'sortDuration' });
      setActive({ price: false, fast: true });
    }
  };
  return (
    <div className={style.main__button}>
      <form action="">
        <button
          data-count={'1'}
          className={`${style.button}
          ${active.price ? style.button__active : ''}`}
          onClick={handleClick}
        >
          САМЫЙ ДЕШЁВЫЙ
        </button>
        <button
          data-count={'2'}
          className={`${style.button}
         ${active.fast ? style.button__active : ''}`}
          onClick={handleClick}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
      </form>
    </div>
  );
};
export default Button;
