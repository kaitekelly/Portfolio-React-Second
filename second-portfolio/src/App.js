import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home};
      </div>
    </Router>
  );
}

export default App;
