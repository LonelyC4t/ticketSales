import { Spin } from 'antd';

import style from './noTicket.module.scss';

const Spinner = () => {
  return (
    <div className={style.spin}>
      <span>Собираем билеты </span> <Spin />
    </div>
  );
};
export default Spinner;
