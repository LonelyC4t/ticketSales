/*eslint-disable*/
import Button from './button/button';
import style from './main.module.scss';
import Panel from './panel/panel';
import TicketList from './ticketList/ticketList';

const Main = () => {

    return (
        <>
            <div className={style.main}>
                <Panel />
                <div className={style.main__body}>
                    <Button />
                    <TicketList />
                    <button className={style.main__button_load}>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ</button>
                </div>
            </div>
            
        </>

    )
}
export default Main;