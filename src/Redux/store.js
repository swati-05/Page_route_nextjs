import {  configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import  rootReducer  from './rootReducer';

// ----------------------------------------------------------------------

const makeReducers = (state,action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const store = configureStore({
  reducer: makeReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }),
  devTools: process.env.NODE_ENV !== 'production'
});

export const { dispatch,getState } = store;
const initStore = () => {
  return store;
};

export const wrapper = createWrapper(initStore);