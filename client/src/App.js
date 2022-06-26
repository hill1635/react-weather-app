import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "bulma/css/bulma.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Routes>
            <Route exact path="/" component={Dashboard} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
