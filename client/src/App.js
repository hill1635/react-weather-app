import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import "bulma/css/bulma.min.css";
import "./App.css";

function App() {

  return (
    <Router>
      <div className="background">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
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
