import plane from '../../image/plane.svg';

import style from './header.module.scss';
const Header = () => {
  return (
    <header className="header">
      <div className={style.header__warapper}>
        <img src={plane} alt="plane" />
      </div>
    </header>
  );
};
export default Header;
