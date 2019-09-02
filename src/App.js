import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Danielle Nall</h1>
      </header>
      <Navigation>
        <h2>Danielle Nall</h2>
        <p>Hello 👋</p>
        <p>You've reached my portfolio, I'm a web developer from the North West of England</p>
        Link
      </Navigation>
    </div>
  );
}

export default App;
