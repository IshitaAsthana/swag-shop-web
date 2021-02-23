import React, {Component} from 'react';
import './wishlist.css';
import DataService from '../services/data-service'
import NotificationService,{NOTIF_WISHLIST_CHANGED} from '../services/notification'

import ProductCondensed from '../product-condensed/product-condensed';


let ds = new DataService();
let ns = new NotificationService();

class Wishlist extends Component {

  constructor(props) {
    super(props);

    this.state = {wishlist : []};

    //Bind functions
    this.createWishlist = this.createWishlist.bind(this);
    this.onWishlistChanged = this.onWishlistChanged.bind(this);
  }

  componentDidMount() {
    // console.log("done mounting");
    ns.addObserver(this, NOTIF_WISHLIST_CHANGED, this.onWishlistChanged);
    // console.log("observer setup");
  }

  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }

  onWishlistChanged = newWishlist => {
    this.setState({wishlist: newWishlist});
  }

  createWishlist = () => {
    const list = this.state.wishlist.map((product) =>
      <ProductCondensed product={product} key={product._id} />
    );

    return (list);
  }

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">
            {this.createWishlist()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Wishlist;
