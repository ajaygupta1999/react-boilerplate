import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider} from "react-redux";

// Local storage setup =======
// Central Store ============
const store = configureStore();


// For setting up jwt-token header and 

const localStorageSetup = async () => {
    if (localStorage.jwtToken) {
      // setAuthorizationToken(localStorage.jwtToken);
      // prevent someone from manually tampering with the key of jwtToken in localStorage
      
    }
} 

// localStorageSetup();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
