import axios from 'axios';
import store from 'store';

import { CHANGE_SPINNER_STATUS } from 'actions';

const baseURL = 'https://api.github.com/';

const instance = axios.create({
  baseURL,
  timeout: 3000,
});

instance.interceptors.request.use(
  request => {
    const spinnerObj = {
      open: true,
      msg: '',
    }
    store.dispatch({
      type: CHANGE_SPINNER_STATUS,
      payload: spinnerObj
    })
    return request
  }
)

instance.interceptors.response.use(
  response => {
    const spinnerObj = {
      open: false,
      msg: '',
    }
    store.dispatch({
      type: CHANGE_SPINNER_STATUS,
      payload: spinnerObj
    })
    return response
  },
  error => {
    console.log(error);
    const spinnerObj = {
      open: true,
      msg: 'You have exceeded rate limit, please wait 1 minutes and resend...',
    }
    store.dispatch({
      type: CHANGE_SPINNER_STATUS,
      payload: spinnerObj
    })
    return error
  }
)

export default instance;
