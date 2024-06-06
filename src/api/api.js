import React from 'react';

class Api extends React.Component {
  getSearchId() {
    return fetch('https://aviasales-test-api.kata.academy/search', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
  }

  getTickets(id) {
    return fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
  }
}
const api = new Api();
export { api };
