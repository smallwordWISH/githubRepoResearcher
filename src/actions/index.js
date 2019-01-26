import axios from 'configs/axios';

export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT';

export function fetchSearchResult() {
  const url = '/search/repositories';

  const params = {

  };

  return dispatch => axios.get(url, { params })
    .then(payload => dispatch({
      type: FETCH_SEARCH_RESULT,
      payload,
    })
    );
}