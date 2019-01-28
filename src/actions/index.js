import axios from 'configs/axios';

export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const CHANGE_SPINNER_STATUS = 'CHANGE_SPINNER_STATUS';
export const OPEN_SPINNER = 'OPEN_SPINNER';

const perPage = 30;

export function fetchSearchResult({ searchText, lang, sort }) {
  const url = '/search/repositories';
  if (!searchText || searchText.replace(/\s/g, '').length < 1) return false;
  const q = `${searchText}${lang !== 'All' ? ` language:${lang}` : ''}`;
  const params = {
    q,
    sort,
    page: 1,
    per_page: perPage,
  };
  return dispatch => axios.get(url, { params })
    .then((payload) => {
      const data = payload.data.items;
      if (data.length !== 0) {
        dispatch({
          type: FETCH_SEARCH_RESULT,
          payload: payload.data.items,
        });
      } else {
        dispatch({
          type: CHANGE_SPINNER_STATUS,
          payload: { open: true, msg: 'Could not find any repositories.' },
        });
      }
    });
}

export function addSearchResult({ searchText, lang, sort, page, eventHandler }) {
  const url = '/search/repositories';
  const q = `${searchText}${lang !== 'All' ? ` language:${lang}` : ''}`;
  const params = {
    q,
    sort,
    page,
    per_page: perPage,
  };
  return dispatch => axios.get(url, { params })
    .then((payload) => {
      const data = payload.data.items;
      if (data.length !== 0) {
        dispatch({
          type: ADD_SEARCH_RESULT,
          payload: payload.data.items,
        });
      } else {
        window.removeEventListener('scroll', eventHandler);
        dispatch({
          type: CHANGE_SPINNER_STATUS,
          payload: { open: true, msg: 'There are no more repositories.' },
        });
      }
    })
    .catch((error) => {
      window.removeEventListener('scroll', eventHandler);
    });
}

export function clearSearchResult() {
  return ({
    type: FETCH_SEARCH_RESULT,
    payload: '',
  });
}

export function changeSpinnerStatus(spinnerObj) {
  return ({
    type: CHANGE_SPINNER_STATUS,
    payload: spinnerObj,
  });
}

export function openSpinner() {
  return ({
    type: CHANGE_SPINNER_STATUS,
    payload: { open: true, msg: '' },
  });
}

export function closeSpinner() {
  return ({
    type: CHANGE_SPINNER_STATUS,
    payload: { open: false, msg: '' },
  });
}
