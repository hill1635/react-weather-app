import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "bulma/css/bulma.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Routes>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
