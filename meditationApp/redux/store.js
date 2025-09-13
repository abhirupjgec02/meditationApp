import { configureStore } from '@reduxjs/toolkit';
import userLoggedInReducer from './userLoggedInSlice';

const store = configureStore({
  reducer: {
    userLoggedIn: userLoggedInReducer,
  },
});

export default store;
