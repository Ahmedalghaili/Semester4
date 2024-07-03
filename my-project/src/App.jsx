import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.jsx';
import Example from './Loginpages/split_screen.jsx';
import Registration from './Loginpages/Registartion.jsx';
import Report1 from './Report/Report1.jsx';
import Chart1 from './Report/Chart1.jsx';
import Chart2 from './Report/Chart2.jsx';
import StatisticalDataReport from './Report/StatisticalDataReport.jsx';
import ViewComplaints from './ComplaintCard/ViewComplaints.jsx';
import AboutUs from './ComplaintCard/AboutUs.jsx'
import Amin from './dashboard/brand_sidebar.jsx'
import LoginAdmin from './dashboard/LoginA.jsx'
import RegistrationA from './dashboard/RegistartionA.jsx'

function App() {
  return (

   

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Example />} />
        <Route path="/registerU" element={<Registration />} />

        <Route path="/LoginA" element={<LoginAdmin />} />
        <Route path="/registerA" element={<RegistrationA />} />

        <Route path="/report" element={<Report1 />} />
        <Route path="/chart1" element={<Chart1 />} />
        <Route path="/chart2" element={<Chart2 />} />
        <Route path="/statistical-data-report" element={<StatisticalDataReport />} />
        <Route path="/view-complaints/*" element={<ViewComplaints />} /> {/* Add trailing * */}
        <Route path="/user" element={<Report1 />} /> {/* Ensure this route is defined */}
        <Route path="/about" element={<AboutUs />} /> {/* Add this route */}
            <Route path="#" element={<Amin/>} /> {/* Add this route */}


      </Routes>
    </Router>
  );
}

export default App;
