import { combineReducers } from 'redux';
import { Map } from 'immutable';

import { FETCH_SEARCH_RESULT } from 'actions';

const initailState = Map({
  searchResults: {},
});

const searchReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULT:
      return state.set('searchResults', action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchReducer,
});

export default rootReducer;
