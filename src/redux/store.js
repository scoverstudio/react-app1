import { createStore } from "redux";
import shortid from "shortid";
import initialState from "./initialState";
import strContains from "../utils/strContains";

// selectors

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    card => card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = state => state.columns;

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getAllLists = state => state.lists;

export const getSearchString = state => state.searchString;

// action creators

export const addColumn = payload => ({ type: "ADD_COLUMN", payload });

export const addCard = payload => ({ type: "ADD_CARD", payload });

export const addSearchString = payload => ({
  type: "UPDATE_SEARCHSTRING",
  payload,
});
export const clearSearchString = payload => ({
  type: "CLEAR_SEARCHSTRING",
  payload,
});

// reducers

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }],
      };

    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), ...action.payload }],
      };

    case "UPDATE_SEARCHSTRING":
      return {
        ...state,
        searchString: action.payload,
      };
    case "CLEAR_SEARCHSTRING":
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

// store

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
