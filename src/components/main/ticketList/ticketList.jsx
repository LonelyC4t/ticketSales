/*eslint-disable*/
import Ticket from './ticket/ticket';
import style from './ticketList.module.scss';

const TicketList = () => {

    return(
        <div className={style.main__ticketList}>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    );
};
export default TicketList;