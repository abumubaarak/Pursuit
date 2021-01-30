import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <Provider store={store}>

  <BrowserRouter>
   <React.StrictMode>
   <ChakraProvider>
     <App />
   </ChakraProvider>
     
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

 