import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ScrollToTop} from "./components"
import {FilterProvider} from "./context"
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <FilterProvider>
      <ScrollToTop/>
      <ToastContainer position="top-right" autoClose={5000}/>
        <App />
    </FilterProvider>  
    </Router>
  </React.StrictMode>
);