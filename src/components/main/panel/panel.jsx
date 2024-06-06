import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import style from './panel.module.scss';

const Panel = () => {
  const dispatch = useDispatch();

  const chek = useSelector((state) => state.checkBoxes);

  const selectedAll = useMemo(() => {
    return Object.values(chek).every(Boolean);
  }, [chek]);

  const handleCheked = (e) => {
    const { id, checked } = e.target;

    if (id === 'select-all') {
      dispatch({ type: 'switchAll', payload: !chek.check1 });
      return;
    }

    dispatch({
      type: 'check',
      payload: {
        [id]: checked,
      },
    });
  };

  return (
    <div className={style.main__panel}>
      <h6>KОЛИЧЕСТВО ПЕРЕСАДОК</h6>
      <form>
        <ul>
          <label htmlFor="select-all">
            <li>
              <input
                onChange={handleCheked}
                checked={selectedAll}
                className={style.panel__item}
                id="select-all"
                type="checkbox"
              />
              Все
            </li>
          </label>
          <label htmlFor="check1">
            <li>
              <input
                onChange={handleCheked}
                checked={chek.check1}
                className={style.panel__item}
                id="check1"
                type="checkbox"
              />
              Без пересадок
            </li>
          </label>
          <label htmlFor="check2">
            <li>
              <input
                onChange={handleCheked}
                checked={chek.check2}
                className={style.panel__item}
                id="check2"
                type="checkbox"
              />
              1 пересадка
            </li>
          </label>
          <label htmlFor="check3">
            <li>
              <input
                onChange={handleCheked}
                checked={chek.check3}
                className={style.panel__item}
                id="check3"
                type="checkbox"
              />
              2 пересадки
            </li>
          </label>
          <label htmlFor="check4">
            <li>
              <input
                onChange={handleCheked}
                checked={chek.check4}
                className={style.panel__item}
                id="check4"
                type="checkbox"
              />
              3 пересадки
            </li>
          </label>
        </ul>
      </form>
    </div>
  );
};
export default Panel;
