import { combineReducers } from 'redux';
import { Map } from 'immutable';

import { FETCH_SEARCH_RESULT, ADD_SEARCH_RESULT } from 'actions';

const initailState = Map({
  searchResults: {},
});

// const initailState = {
//   searchResults: {},
// };

const searchReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULT:
      return state.set('searchResults', action.payload);
    case ADD_SEARCH_RESULT:
      return state.setIn(['searchResults', 'items'], arr => arr.concat(action.payload.items));
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchReducer,
});

export default rootReducer;
