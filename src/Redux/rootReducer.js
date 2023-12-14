import { combineReducers } from '@reduxjs/toolkit';
import authSlicer from './slices/authSlicer';


const rootReducers = combineReducers({
   authState:authSlicer
});

export default rootReducers;