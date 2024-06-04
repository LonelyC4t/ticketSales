/*eslint-disable*/
/*
const initialState = {
    checkBoxes: {
        chek1: false,
        chek2: false,
        chek3: false,
        chek4: false,
        chek5: false,
    }
}

export const reducer = (state = initialState, action) => {
    
    
    switch (action.type) {
        case 'chek': 
        console.log("chek");
        const newItem = action.payload;
        
        return  { ...state, checkBoxes: {
            ...state.checkBoxes,
            ...newItem
          } 
        };

        case 'deselectAll':
            console.log('deselectAll');
            let newObject = {};
                for(let value in state.checkBoxes) {
                    let newChek = {[value]: false}
                    newObject =  {...newObject, ...newChek}
                }
                
                return {...state, checkBoxes: {
                ...newObject
            }};

        case 'selectChek1':
            console.log('selectChek1');
            const item = {chek1: true,}
                return {...state, checkBoxes: {
                    ...state.checkBoxes,
                    ...item,
                } 
            };

            case 'deselectChek1':
                const element = {chek1: false,}
                return {...state, checkBoxes: {
                    ...state.checkBoxes,
                    ...element,
                } 
            };
            
            case 'selectAll':
                console.log('selectAll');
                let newObj = {};
                for(let value in state.checkBoxes) {
                    let newChek = {[value]: true}
                    newObj =  {...newObj, ...newChek}
                }
                
                return {...state, checkBoxes: {
                ...newObj
            }};

            
    
        default:
        return state;
    }
    
}
*/
const initialState = {
    tickets: [],
    ids: null,
    checkBoxes: {
      check1: false,
      check2: false,
      check3: false,
      check4: false,
    },
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {

      case 'check':
        return {
          ...state,
          checkBoxes: {
            ...state.checkBoxes,
            ...action.payload,
          },
        };
  
      case 'switchAll':
        return {
          ...state,
          checkBoxes: Object.keys(state.checkBoxes).reduce((acc, key) => {
            acc[key] = action.payload;
            return acc;
          }, {}),
        };

        case 'ids':
          return {...state, ids:action.payload}

        case 'addTicket':
          return {...state, tickets: action.payload}
  
      default:
        return state;
    }
  };