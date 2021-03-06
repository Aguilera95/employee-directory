import React from 'react';
// import logo from './logo.svg';

import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">

<Wrapper>
        <Header />
        <Main />
      </Wrapper>
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
    </div>
  );
}

export default App;
