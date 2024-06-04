/*eslint-disable*/
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api/api";

const getId = async () => {     
    let request = await api.getSearchId();
    let responce = await request.json();
    return responce.searchId;
    
};

const getTickets = async (id) => {
    if (id) {
        let request = await api.getTickets(id);
        if (request.ok) {
            let responce = request.json();
            return responce
        }
        
    };
    
};

const data = () => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.ids)
    const getData = async () => {
        try {
            const ids =  await getId();
            dispatch({type:'ids', payload: ids});

            if (ids) {
                const ticket = await getTickets(ids);
                dispatch({type:'addTicket', payload: ticket.tickets})
            }
        }
        catch(error) {
            console.log(error);
        };
    };
    
    return getData;
};

export default data

    
    

