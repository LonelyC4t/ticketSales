import style from './ticket.module.scss';

const Ticket = ({ info }) => {
  const date = (dateStr) => {
    const date = new Date(dateStr);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  const durationTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
      .toString()
      .padStart(2, '0');
    const min = (minutes % 60).toString().padStart(2, '0');
    return `${hours}ч ${min}м`;
  };
  const transit = (stop) => {
    return `${stop.length > 0 ? stop.length : ''} ${stop.length > 1 ? 'ПЕРЕСАДКИ' : stop.length == 1 ? 'ПЕРЕСАДКА' : 'БЕЗ ПЕРЕСАДОК'}`;
  };
  return (
    <div className={style.ticketList__ticket}>
      <div className={style.ticket__header}>
        <p>{`${info.price} Р`}</p>
        <img src={`http://pics.avs.io/100/40/${info.carrier}.png`} alt={`${info.carrier} авиакомпания`} />
      </div>
      <div className={style.ticket__info}>
        <div className={style.ticket__info_group}>
          <div>
            <p>{`${info.segments[0].origin}-${info.segments[0].destination}`}</p>
            <p>{`Вылет ${date(info.segments[0].date)}`}</p>
          </div>
          <div>
            <p>В ПУТИ</p>
            <p>{durationTime(info.segments[0].duration)}</p>
          </div>
          <div>
            <p>{transit(info.segments[0].stops)}</p>
            <p>{info.segments[0].stops.join(', ')}</p>
          </div>
        </div>
        <div className={style.ticket__info_group}>
          <div>
            <p>{`${info.segments[1].origin}-${info.segments[1].destination}`}</p>
            <p>{`Вылет ${date(info.segments[1].date)}`}</p>
          </div>
          <div>
            <p>В ПУТИ</p>
            <p>{durationTime(info.segments[1].duration)}</p>
          </div>
          <div>
            <p>{transit(info.segments[1].stops)}</p>
            <p>{info.segments[1].stops.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
