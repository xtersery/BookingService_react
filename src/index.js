import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authorize from './components/Authorize';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="*" element={<App/>} />
          <Route path="/register" element={<Authorize/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);

reportWebVitals();
