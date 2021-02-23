//singleton approach of developing Services
//singleton allows only one instance to be created of the parent class. Multiple entities can access it and the data will remain the same, unlike the different objects having diffrent values for properties of the parent class

//es6 singletons search
import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification';

let ns = new NotificationService();

let instance = null;
var wishlist = [];

class DataService {
  constructor() {
    if(!instance) {
      instance = this;
    }
    return instance;
  }

  isOnWishlist = item => {
    for(var x=0 ; x< wishlist.length; x++)
    {
      if(wishlist[x]._id===item._id)
      {
        // console.log("present");
        return true;
      }
    }
    // console.log("not present");
    return false;
  }

  addToWishlist = item => {
    if(!this.isOnWishlist(item)) {
      wishlist.push(item);
    }
    // console.log(wishlist);
    ns.postNotification(NOTIF_WISHLIST_CHANGED,wishlist);
  }

  removeFromWishlist = item => {
    for(var x=0;x<wishlist.length;x++)
    {
      // console.log(wishlist[x]._id);
      // console.log(item._id);
      if(wishlist[x]._id===item._id)
      {
        wishlist.splice(x,1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED,wishlist);
        break;
      }
    }
  }

}

export default DataService;
