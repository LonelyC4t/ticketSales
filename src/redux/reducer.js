const initialState = {
  sort: {
    price: false,
    duration: false,
  },
  load: true,
  tickets: [],
  ids: null,
  checkBoxes: {
    check1: true,
    check2: true,
    check3: true,
    check4: true,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load':
      return { ...state, load: action.payload };

    case 'check':
      return {
        ...state,
        checkBoxes: {
          ...state.checkBoxes,
          ...action.payload,
        },
      };

    case 'sortPrice':
      return { ...state, sort: { price: true, duration: false } };

    case 'sortDuration':
      return { ...state, sort: { price: false, duration: true } };

    case 'switchAll':
      return {
        ...state,
        checkBoxes: Object.keys(state.checkBoxes).reduce((acc, key) => {
          acc[key] = action.payload;
          return acc;
        }, {}),
      };

    case 'ids':
      return { ...state, ids: action.payload };

    case 'addTicket':
      return { ...state, tickets: [...state.tickets, ...action.payload] };

    default:
      return state;
  }
};
