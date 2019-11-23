import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './containers/MainLayout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout />
      </div>
    </Router>
  );
}

export default App;
