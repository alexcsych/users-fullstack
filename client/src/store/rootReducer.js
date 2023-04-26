import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import tasksReducer from './slices/tasksSlice';

const rootReducer = combineReducers({
  usersData: usersReducer,
  tasksData: tasksReducer,
});

export default rootReducer;
