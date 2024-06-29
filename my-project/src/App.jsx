import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.jsx';
import Registrasi from './Registrasi.jsx';
import Report from './ReportPage.jsx';
import Login from './Loginpages/Login1.jsx';
import User from './Report/User.jsx';
// import Em from './brand_sidebar.jsx';
import ReportPage from './ReportPage';

function App() {
  return (
 

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrasi />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/user" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App; // Change this to a default export
