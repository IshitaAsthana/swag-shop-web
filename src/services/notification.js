export const NOTIF_WISHLIST_CHANGED = "notif-wishlist-changed";

var observers = {};
let instance = null;

class NotificationService {

  constructor() {
    if(!instance)
    {
      instance = this;
    }
    return instance;
  }

  postNotification = (notifName , data) => {
    let obs = observers[notifName];
    for(var x=0; x<obs.length;x++)
    {
      var obj = obs[x];
      obj.callBack(data);
    }
  }

  removeObserver = (observer, notification) => {
    let obs = observers[notification];
    if(obs)
    {
      for(var x=0; x<obs.length;x++)
      {
        if(obs[x].obsever === observer)
        {
          obs.splice(x,1);
          observers[notification]=obs;
          break;
        }
      }
    }
  }

  addObserver = (observer, notification, callBack) => {
    let obs = observers[notification];
    if(!obs)
    {
      observers[notification]=[];
    }
    let obj = {observer: observer, callBack: callBack};
    observers[notification].push(obj);
  }

}

export default NotificationService;
