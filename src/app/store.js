import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/login/loginSlice";
import adminsReducer from "../features/admins/adminsSlice";
import clientsReducer from "../features/clients/clientsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admins: adminsReducer,
    clients: clientsReducer,
  },
});
