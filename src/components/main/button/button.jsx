/*eslint-disable*/
import style from './button.module.scss';

const Button = () => {

    return(
        <div className={style.main__button}>
            <form action="">
                <button className={style.button}>САМЫЙ ДЕШЁВЫЙ</button>
                <button className={style.button}>САМЫЙ БЫСТРЫЙ</button>
                <button className={style.button}>ОПТИМАЛЬНЫЙ</button>
            </form>
        </div>
    );
};
export default Button;