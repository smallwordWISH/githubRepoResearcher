import axios from 'configs/axios';

export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT';

export function fetchSearchResult({ searchText, lang, sort }) {
  const url = '/search/repositories';
  if (!searchText || searchText.replace(/\s/g, '').length < 1) return false;
  const q = `${searchText}${lang !== 'All' ? `+language:${lang}` : ''}`;
  const params = {
    q,
    sort,
  };
  return dispatch => axios.get(url, { params })
    .then(payload => dispatch({
      type: FETCH_SEARCH_RESULT,
      payload,
    })
    );
}