import Cookies from 'js-cookie';
import axios from './axios';

// ----------------------------------------------------------------------

const isValidToken = (token) => {
  if (!token) {
    return false;
  }
  return true;
};

const setSession = (token) => {
  if (token) {
    Cookies.set('token', token);
    localStorage.setItem('token', token);
    axios.defaults.headers.common.token = `${token}`;
  } else {
    Cookies.remove('token');
    localStorage.removeItem('token');
    delete axios.defaults.headers.common.token;
  }
};
export { isValidToken, setSession };