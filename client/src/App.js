import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "bulma/css/bulma.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
