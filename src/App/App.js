import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import React from 'react';
import ReactDOM from 'react-dom';


const http = new HttpService();

class App extends React.Component {

  constructor(props) {
      super(props);
      http.getProducts();
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
          Hello World!
          </h2>
          <p>
            Edit <code>src/App/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
