import React from 'react';
import './App.css';
import Routes from './routes/routes'


const App = () => {
  return (
    <div className="App">
      <h1 className="appHeader">Library</h1>
      <main >
        <Routes />
      </main>
    </div>
  )
}


export default App;

