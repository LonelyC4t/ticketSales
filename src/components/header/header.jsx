/*eslint-disable*/
import style from './header.module.scss'
import plane from '../../image/plane.svg';

 const Header = () => {

    return (
        <header className='header'>
            <div className={style.header__warapper}>
                <img src={plane} alt="" />
            </div>
        </header>
    )
}
export default Header;
