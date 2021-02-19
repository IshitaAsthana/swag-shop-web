import 'whatwg-fetch';

class HttpService {
  getProducts = () => {
    //1
      var promise = new Promise((resolve,reject) => {
      //2
        fetch('http://localhost:3000/product')
        .then(response => {
          //4
          resolve(response.json());
      });
    });
    //3
    return promise;
  }
}

export default HttpService;
