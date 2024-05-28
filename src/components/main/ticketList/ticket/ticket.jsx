/*eslint-disable*/
import style from './ticket.module.scss';
import logo from '../../../../image/s7.svg'
const Ticket = () => {

    return(
        <div className={style.ticketList__ticket}>
            <div className={style.ticket__header}>
                <p>13 400 P</p>
                <img src={logo} alt="" />
            </div>
            <div className={style.ticket__info}> 
                <div className={style.ticket__info_group}> 
                    <div>
                        <p>MOW-HKT</p>
                        <p>10:45 - 08:00</p>
                    </div>
                    <div>
                        <p>В ПУТИ</p>
                        <p>21ч 15м</p>
                    </div>
                    <div>
                        <p>2 ПЕРЕСАДКИ</p>
                        <p>HKB, JNB</p>
                    </div>
                </div>
                <div className={style.ticket__info_group}> 
                    <div>
                        <p>MOW-HKT</p>
                        <p>11:20 - 00:50</p>
                    </div>
                    <div>
                        <p>В ПУТИ</p>
                        <p>13ч 30м</p>
                    </div>
                    <div>
                        <p>1 ПЕРЕСАДКА</p>
                        <p>HKG</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Ticket;