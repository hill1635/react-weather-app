import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./home/Home";
import SavedLocations from "./savedlocations/SavedLocations";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Footer from "./components/footer/Footer";
import API from "./utils/API";
import "bulma/css/bulma.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.scss";

function App() {
  const [ status, setStatus ] = useState(false);
  const [ user, setUser ] = useState({});
  var addCurrentAQI = (lat, long, data, setState) => {
    API.getAQI(lat, long)
      .then((res) => {
        var aqiData = res.data.list[0];
        var forecastData = data;
        forecastData.current.aqi = aqiData;
        setState(forecastData);
        console.log("forecastData:", forecastData);
      });
  };

  var getWeather = (lat, long, setState) => {
    API.getSevenDay(lat, long)
      .then((res) => {
        addCurrentAQI(lat, long, res.data, setState);
      });
  };
  
useEffect(() => {
  API.checkSession()
  .then((res) => {
    setUser(res.data);
  });
}, []);

  return (
    <Router>
      <div className="background">
        <Navbar user={user} />
        <Routes>
          <Route exact path="/" element={<Home getWeather={getWeather} />} />
          <Route exact path="/dashboard" element={<SavedLocations user={user} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
