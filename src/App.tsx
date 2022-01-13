import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import axios from 'axios'

function peticion(){
  axios.get('http://localhost:5000/list').then(function (response) {
    // handle success
    console.log(response);
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={peticion}>Test Express Implementation</Button>
      </header>
    </div>
  );
}

export default App;
