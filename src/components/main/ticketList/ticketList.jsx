/*eslint-disable*/
import { useSelector } from 'react-redux';
import Ticket from './ticket/ticket';
import { v4 as uuidv4 } from 'uuid';
import style from './ticketList.module.scss';

const TicketList = () => {
    let data = useSelector(state => state.tickets);

    const ticket = data.map((el) => {
        return <Ticket key={uuidv4()} info = {el}/>
    })
    return(
        <div className={style.main__ticketList}>
            {ticket}
        </div>
    );
};
export default TicketList;