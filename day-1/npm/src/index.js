import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import MyContextProvider from './Context/authcontext';
import ThemeContextProvider from './Context/themecontext';
import {Provider} from "react-redux";
import Store1 from './ReduxTodo/Store';
import MyContextProvider1 from './Backened/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeContextProvider>
  <MyContextProvider>
    <MyContextProvider1>
  <BrowserRouter> 
<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
  {/* <Provider Store1={Store1}> */}

    <App />
    {/* </Provider> */}

    </BrowserRouter>
    </MyContextProvider1>
    </MyContextProvider>

    </ThemeContextProvider>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();