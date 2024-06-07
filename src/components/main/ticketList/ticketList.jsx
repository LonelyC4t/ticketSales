/*eslint-disable*/
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NoTickets from '../noTicketElem/noTicket';
import Spinner from '../noTicketElem/spin';

import Ticket from './ticket/ticket';
import style from './ticketList.module.scss';

const TicketList = ({ count }) => {
  let data = useSelector((state) => state.tickets);
  let load = useSelector((state) => state.load);
  let filter = useSelector((state) => state.checkBoxes);
  let sort = useSelector((state) => state.sort);
  let [keys, setKeys] = useState([]);
  data = data.filter((el) => {
    const stops = el.segments[0].stops.length;
    const matchesCheck1 = filter.check1 && stops === 0;
    const matchesCheck2 = filter.check2 && stops === 1;
    const matchesCheck3 = filter.check3 && stops === 2;
    const matchesCheck4 = filter.check4 && stops === 3;
    return matchesCheck1 || matchesCheck2 || matchesCheck3 || matchesCheck4;
  });
  useEffect(() => {
    const key = data.map(() => uuidv4());
    setKeys(key);
  }, [data.length]);
  data.sort((a, b) => {
    if (sort.price) {
      if (a.price < b.price) return -1;
      return 0;
    }
    if (sort.duration) {
      if (a.segments[0].duration < b.segments[0].duration) return -1;
      return 0;
    }
  });

  const ticket = data.map((el, ids) => {
    if (ids < count) {
      return <Ticket key={keys[ids] || ids} info={el} />;
    }
  });
  
  
  
  return (
    <div  className={style.main__ticketList}>
      {load ? <Spinner /> : null}
      {Object.values(filter).every((el) => el === false) ? <NoTickets /> : ticket}
    </div>
  );
};

export default TicketList;
