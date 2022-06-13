import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/login/loginSlice'
import adminsReducer from '../features/admins/AdminsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    admins: adminsReducer,
  },
});
