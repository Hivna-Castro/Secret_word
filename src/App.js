// CSS
import './App.css';
// React
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordslist } from "./data/words";

// Components
import StartScreen from './components/StartScreen';


function App() {
  return (
    <div className="App">
      <StartScreen />
     
    </div>
  );
}

export default App;
