import initialState from "./initialState";
import { createStore, combineReducers } from 'redux';
import listsReducer from './listsRedux'
import columnsReducer from './columnsReducer'
import cardsReducer from "./cardsReducer";
import searchStringReducer from "./searchStringReducer";

// reducer

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
}

const reducer = combineReducers(subreducers);

// store

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
