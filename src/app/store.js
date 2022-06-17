import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/login/loginSlice";
import adminsReducer from "../features/admins/AdminsSlice";
import clientsReducer from "../features/clients/ClientsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admins: adminsReducer,
    clients: clientsReducer,
  },
});
