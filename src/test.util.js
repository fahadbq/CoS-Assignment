// test-utils.jsx
import React from 'react'
import '@testing-library/jest-dom'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import userReducer from "./features/login/loginSlice";
import adminsReducer from "./features/admins/adminsSlice";
import clientsReducer from "./features/clients/clientsSlice";

const rootReducer = {
    user: userReducer,
    admins: adminsReducer,
    clients: clientsReducer,
}

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }