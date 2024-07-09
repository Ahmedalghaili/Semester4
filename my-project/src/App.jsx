// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.jsx';
import Example from './Loginpages/split_screen.jsx';
import Registration from './Loginpages/Registartion.jsx';
import Sidebar from './components/Sidebar.jsx';
import Report1 from './Report/Report1.jsx';
import Chart1 from './Report/Chart1.jsx';
import Chart2 from './Report/Chart2.jsx';
import StatisticalDataReport from './Report/StatisticalDataReport.jsx';
import ViewComplaints from './ComplaintCard/ViewComplaints.jsx';
import AboutUs from './ComplaintCard/AboutUs.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import MonitorProblems from './dashboard/MonitorProblems.jsx';
import LoginAdmin from './dashboard/LoginA.jsx';
import RegistrationA from './dashboard/RegistartionA.jsx';
import FetchDataFromPHP from './FetchDataFromPHP.jsx'; // Import the new component
import EditProblem from './dashboard/EditProblem.jsx';
import { UserProvider } from './components/UserContext.jsx'; // Import the UserProvider

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Example />} />
          <Route path="/registerU" element={<Registration />} />
          <Route path="/admin/Login" element={<LoginAdmin />} />
          <Route path="/admin/edit-problem/:id" element={< EditProblem/>} />
          <Route path="/admin/register" element={<RegistrationA />} />
          <Route path="/report" element={<Report1 />} />
          <Route path="/chart1" element={<Chart1 />} />
          <Route path="/chart2" element={<Chart2 />} />
          <Route path="/statistical-data-report" element={<StatisticalDataReport />} />
          <Route path="/view-complaints/*" element={<ViewComplaints />} />
          <Route path="/user" element={<Report1 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admin/" element={<Dashboard />} />
          <Route path="/admin/monitor-problems" element={<MonitorProblems />} />
          <Route path="/fetch-data" element={<FetchDataFromPHP />} /> {/* Add new route */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
