import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import  storeFactory , {history} from './store';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css';


const store = storeFactory;
console.log("StoreIndex", store);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      
    </Provider>,
   document.getElementById('root')
);
