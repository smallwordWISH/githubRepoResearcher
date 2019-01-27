import { combineReducers } from 'redux';
import { Map } from 'immutable';

import { FETCH_SEARCH_RESULT, ADD_SEARCH_RESULT, CHANGE_SPINNER_STATUS } from 'actions';

const initailState = Map({
  searchResults: [],
});

const spinnerState = {
  open: false,
  msg: '',
};

const searchReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULT:
      return state.set('searchResults', action.payload);
    case ADD_SEARCH_RESULT:
      return state.update('searchResults', arr => arr.concat(action.payload));
    default:
      return state;
  }
};

const spinnerReducer = (state = spinnerState, action ) => {
  switch (action.type) {
    case CHANGE_SPINNER_STATUS:
      return { ...action.payload }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchReducer,
  spinnerReducer,
});

export default rootReducer;
