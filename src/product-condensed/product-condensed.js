import React, {Component} from 'react';
import './product-condensed.css';

import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification';

let ds = new DataService();
let ns = new NotificationService();

class ProductCondensed extends Component {

  constructor(props) {
    super(props);

    //Bind
    this.removeProduct = this.removeProduct.bind(this);
    // this.onWishlistChanged = this.onWishlistChanged.bind(this);
  }

  // componentDidMount() {
  //   // console.log("done mounting");
  //   ns.addObserver(this, NOTIF_WISHLIST_CHANGED, this.onWishlistChanged);
  //   // console.log("observer setup");
  // }
  //
  // componentWillUnmount() {
  //   ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  // }
  //
  // onWishlistChanged = newWishlist => {
  //   this.setState({onWishlist: ds.isOnWishlist(this.props.product)});                                  //all this not needed since the upper level product will refresh this automatically
  // }


  removeProduct = () => {
    ds.removeFromWishlist(this.props.product);
  }

  render() {
    return (
      <li className="list-group-item pc-condensed">
        <p> <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>   {this.props.product.title} | <b>${this.props.product.price}</b></p>
      </li>
    );
  }
}

export default ProductCondensed;
