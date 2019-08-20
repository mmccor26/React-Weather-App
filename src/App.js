import React from 'react';
import './App.css';

import WeatherBar from "./Components/WeatherBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter A City For The Weather</h1>

        <WeatherBar></WeatherBar>
      </header>
    </div>
  );
}

export default App;
