import style from './noTicket.module.scss';
const NoTickets = () => {
  return (
    <div className={style.message}>
      <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
    </div>
  );
};
export default NoTickets;
