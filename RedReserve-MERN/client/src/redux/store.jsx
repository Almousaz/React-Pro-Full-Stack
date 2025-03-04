import { configureStore } from '@reduxjs/toolkit';
import authSlice from './feature/authSlice.jsx';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
