import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';

const App = () => (
  <div>
    <Router>
      <div>
        <h2>ABOUT</h2>
        <nav>
          <Link to="/about">about</Link>
        </nav>
        <div>
          <Route path="/about" />
        </div>

      </div>
    </Router>
  </div>
);

export default App;
