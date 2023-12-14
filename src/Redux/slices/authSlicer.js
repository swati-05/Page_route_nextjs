import {
    createSlice,
  } from '@reduxjs/toolkit';
  import { setSession } from '../../utils/jwt';
  import axios from '../../utils/axios';
  
  
  const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    role: null
  };
  
  const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setInitialize: (state, action) => {
        const { isAuthenticated, user } = action.payload;
        state.isAuthenticated = isAuthenticated;
        state.isInitialized = true;
        state.user = user;
      },
      setLogin: (state, action) => {
        const { user } = action.payload;
        state.isAuthenticated = true;
        state.user = user;
      },
      setLogout: (state) => {
        state.isAuthenticated = false;
      },
      setRegister: (state, action) => {
        const { user } = action.payload;
        state.isAuthenticated = true;
        state.user = user;
      }
    }
  });
  
  export default authSlicer.reducer;
  
  export const { setInitialize, setLogin, setLogout, setRegister } =
    authSlicer.actions;
  
  export const initialize = () => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          setSession(token);
          const response = await axios.get('/user/get-user');
          const  userDetails  = response.data;
          dispatch(setInitialize({ isAuthenticated: true, user: userDetails }));
        } else {
          dispatch(setInitialize({ isAuthenticated: false, user: null }));
        }
      } catch (err) {
        dispatch(setInitialize({ isAuthenticated: false, user: null }));
      }
    };
  };
  
  export const login = (
    response
  ) => {
    return async (dispatch) => {
      try {
        const { tokens } = response.data;
        setSession(tokens);
        // dispatch(setLogin({ user: userDetails }));
      } catch (err) {
        console.error(err);
      }
    };
  };
  
  export const logout = () => {
    return async (dispatch) => {
      setSession(null);
      dispatch(setLogout());
    };
  };

  
  export const register = (fullName, mobile, email, regToken) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('/auth/user-register', {
          fullName,
          mobile,
          email,
          token: regToken
        });
        const { token, userDetails } = response.data;
  
        localStorage.setItem('token', token);
  
        dispatch(setRegister({ user: userDetails }));
        return response;
      } catch (err) {
        console.error(err);
        return err;
      }
    };
  };