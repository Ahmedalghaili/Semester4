import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Example1 from './Example1.jsx';
import Registrasi from './Registrasi.jsx';
import Report from './Report.jsx';
import Login from './Loginpages/Login1.jsx';
import User from './User.jsx';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Example1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrasi />} />
        <Route path="/report" element={<Report />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
