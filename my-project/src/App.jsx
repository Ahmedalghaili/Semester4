import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.jsx';
import Registrasi from './Registrasi.jsx';
import Report from './Report.jsx';
import Login from './Loginpages/Login1.jsx';
import User from './Report/User.jsx';
import Peg2 from './Home/Peg2.jsx'
import Peg3 from './Home/Peg3.jsx'
import Example from './Home/Footer.jsx';

function App() {
  return (



    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registrasi />} />
        <Route path="/report" element={<Report />} />
        <Route path="/user" element={<User />} />
        <Route path="/Peg2" element={<Peg2 />} />
        
      </Routes>
    </Router>
  );
}

export default App;
