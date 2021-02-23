import React, {Component} from 'react';
import './product.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification';

let ds = new DataService();
let ns = new NotificationService();

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {onWishlist: ds.isOnWishlist(this.props.product)};
    //bind
    this.onButtonClicked = this.onButtonClicked.bind(this);
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
    this.setState({onWishlist: ds.isOnWishlist(this.props.product)});
  }

  onButtonClicked = () => {
    // console.log("clicked");
    if(!this.state.onWishlist){//!ds.isOnWishlist(this.props.product)){
      // console.log("adding");
      ds.addToWishlist(this.props.product);
    } else {
      // console.log("removing");
      ds.removeFromWishlist(this.props.product);
    }// console.log("add function done");
  }

  render() {

    var btnClass;

    if(this.state.onWishlist===true)
    {
      btnClass = "btn btn-danger";
    }
    else {
      btnClass = "btn btn-primary";
    }

    return (
      <div className="card product">
        <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.product.title}</h4>
          <p className="card-text">Price: ${this.props.product.price}</p>
          <a href="#" onClick={() => this.onButtonClicked()} className={btnClass}>{this.state.onWishlist ?" Remove from wishlist ":" Add to Wishlist "}</a>
        </div>
      </div>
    );
  }
}

export default Product;
