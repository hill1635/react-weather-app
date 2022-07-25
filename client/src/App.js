import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./home/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Footer from "./components/footer/Footer";
import API from "./utils/API";
import "bulma/css/bulma.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.css";

function App() {
  var getWeather = (lat, long, callback) => {
    API.getSevenDay(lat, long)
      .then((res) => {
        callback(res.data);
        console.log("getWeather");
      });
  };

  return (
    <Router>
      <div className="background">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home getWeather={getWeather} />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
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
