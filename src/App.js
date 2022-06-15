import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import NavBar from "./NavBar";

import { getAsyncAdmins } from "./features/admins/AdminsSlice";
import { asyncGetClients } from "./features/clientsComp/ClientsSlice";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const dispatch = useDispatch();

  const handleAuth = () => {
    return setUserLoggedIn(true);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserLoggedIn(true);
      dispatch(getAsyncAdmins());
      dispatch(asyncGetClients());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
    </div>
  );
}

export default App;
