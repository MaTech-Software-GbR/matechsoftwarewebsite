import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';

const App : React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Typewriter options={{
      strings: ['MaTech Software', 'Coming soon'],
      autoStart: true,
      loop: true,
    }}
  />
      </header>
    </div>
  );
}


export default App;
