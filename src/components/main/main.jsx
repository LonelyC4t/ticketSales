import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Button from './button/button';
import style from './main.module.scss';
import Panel from './panel/panel';
import TicketList from './ticketList/ticketList';

const Main = () => {
  const [countTicket, setCountTicket] = useState(5);
  const chek = useSelector((state) => state.checkBoxes);

  useEffect(() => {
    setCountTicket(5);
  }, [chek]);

  const moreTicket = () => {
    setCountTicket((prev) => prev + 5);
  };
  return (
    <div className={style.main}>
      <Panel />
      <div className={style.main__body}>
        <Button />
        <TicketList count={countTicket} />
        <button onClick={moreTicket} className={style.main__button_load}>
          ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ
        </button>
      </div>
    </div>
  );
};
export default Main;
