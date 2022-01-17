// selectors
export const getSearchString = (state) => state.searchString;

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName("UPDATE_SEARCHSTRING");
const CLEAR_SEARCHSTRING = createActionName("CLEAR_SEARCHSTRING");

// action creators
export const addSearchString = (payload) => ({
    type: UPDATE_SEARCHSTRING,
    payload,
  });
  export const clearSearchString = (payload) => ({
    type: CLEAR_SEARCHSTRING,
    payload,
  });

const searchStringReducer = (statePart = "", action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    case CLEAR_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
