import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react"
import { store, persistor } from "./redux/store";


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
   <React.StrictMode>
        <ChakraProvider>
          <PersistGate persistor={persistor}>
             <App />
          </PersistGate>
   </ChakraProvider>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

 