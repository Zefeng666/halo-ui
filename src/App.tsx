import React from 'react';
import './styles/index.scss'
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert message={'hello~'}></Alert>
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
