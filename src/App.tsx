import React from 'react';
import './styles/index.scss'
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello message={'hello~'}></Hello>
        <h1>Halo</h1>
        <h2>Halo</h2>
        <h3>Halo</h3>
        <hr/>
        <code>
          const a = b;
        </code>

      </header>
    </div>
  );
}

export default App;
