import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Product from '../product/product';
import Wishlist from '../wishlist/wishlist';

//Services
import HttpService from '../services/http-service';


const http = new HttpService();

class App extends React.Component {

  constructor(props) {
      super(props); // only if parent class exists

      this.state = {products:[]};   //empty array initially
      //Bind functions
      // this.loadData = this.loadData.bind(this);
      //not needed after updates

      this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts()
    .then(data => {
      // console.log("loading");
      // if(self._ismounted === false)
      // self.state = {products:[]};
      self.setState({products:data});
      // console.log(data);
      // console.log(this.state.products);
      // self.render();
    },err => {
      console.log("error");
    });

  }

  productList = () => {
    // console.log(this.state.products);
    const list = this.state.products.map((product) =>
      <div className="col-sm-4" key={product._id}>
        <Product product={product} />
      </div>
    );
    // console.log(list);
    return (list);
  }

  render() {
    // console.log("rendering");
    // console.log(this.productList);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
          Hello World!
          </h2>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()}
              </div>
            </div>
            <div className="col-sm-4">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
