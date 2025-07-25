import { createStore, combineReducers } from 'redux';

const INCREMENT_A = 'INCREMENT_A';
const DECREMENT_A = 'DECREMENT_A';
const INCREMENT_B = 'INCREMENT_B';
const DECREMENT_B = 'DECREMENT_B';

const incrementA = () => ({ type: INCREMENT_A });
const decrementA = () => ({ type: DECREMENT_A });
const incrementB = () => ({ type: INCREMENT_B });
const decrementB = () => ({ type: DECREMENT_B });

const counterAReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_A: return state + 1;
    case DECREMENT_A: return state - 1;
    default: return state;
  }
};

const counterBReducer = (state = 100, action) => {
  switch (action.type) {
    case INCREMENT_B: return state + 10;
    case DECREMENT_B: return state - 10;
    default: return state;
  }
};

const rootReducer = combineReducers({
  counterA: counterAReducer,
  counterB: counterBReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log( store.getState());
});

store.dispatch(incrementA());
store.dispatch(incrementA());
store.dispatch(decrementA());
store.dispatch(incrementB());
store.dispatch(decrementB()); 
