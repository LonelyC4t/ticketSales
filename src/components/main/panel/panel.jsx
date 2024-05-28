/*eslint-disable*/
import style from './panel.module.scss';

const Panel = () => {

    return (
        <div className={style.main__panel}>
            <h6>KОЛИЧЕСТВО ПЕРЕСАДОК</h6>
            <form action="">
                <ul>
                    <label  htmlFor="chek1"> <li><input className={style.panel__item} id='chek1' type="checkbox" /> Все</li></label>
                    <label  htmlFor="chek2"> <li><input className={style.panel__item} id='chek2' type="checkbox" /> Без пересадок</li></label>
                    <label  htmlFor="chek3"> <li><input className={style.panel__item} id='chek3' type="checkbox" /> 1 пересадка</li></label>
                    <label  htmlFor="chek4"> <li><input className={style.panel__item} id='chek4' type="checkbox" /> 2 пересадки</li> </label>
                    <label  htmlFor="chek5"> <li><input className={style.panel__item} id='chek5' type="checkbox" /> 3 пересадки</li> </label>
                </ul>
            </form>
        </div>
    )
}
export default Panel;
