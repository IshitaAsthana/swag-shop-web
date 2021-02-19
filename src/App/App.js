import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../product/product';


const http = new HttpService();

class App extends React.Component {

  constructor(props) {
      super(props); // only if parent class exists

      //Bind functions
      // this.loadData = this.loadData.bind(this);
      //not needed after updates

      this.loadData();
  }

  loadData = () => {

    http.getProducts().then(products => {
      console.log(products);
    },err => {

    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
          Hello World!
          </h2>
        </header>
        <div className="App-main">
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
