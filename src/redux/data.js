import { useDispatch } from 'react-redux';

import { api } from '../api/api';

let isFetching = false;
let ids = undefined;
const getId = async () => {
  let request = await api.getSearchId();
  let responce = await request.json();
  return responce.searchId;
};

const getTickets = async (id) => {
  if (!id || isFetching) return;
  isFetching = true;
  try {
    let request = await api.getTickets(id);

    if (request.ok) {
      let responce = await request.json();

      if (!responce.stop) {
        setTimeout(() => getTickets(id), 3000);
      }
      return responce;
    }
  } catch (err) {
    console.error(err);
  } finally {
    isFetching = false;
  }
};

const data = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    dispatch({ type: 'load', payload: true });
    try {
      if (!ids) {
        ids = await getId();
        dispatch({ type: 'ids', payload: ids });
      }
      if (ids) {
        let ticket = await getTickets(ids);

        ticket && dispatch({ type: 'addTicket', payload: ticket.tickets });
      }
    } catch (error) {
      console.error(error);
    }
    dispatch({ type: 'load', payload: false });
  };

  return getData;
};

export default data;
