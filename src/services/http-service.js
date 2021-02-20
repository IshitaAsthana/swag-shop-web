import 'whatwg-fetch';

class HttpService {
  getProducts = () => {
    //1
      var promise = new Promise((resolve,reject) => {
      //2
        fetch('http://localhost:3000/product')
        .then(response => {
          //4
          // console.log("working after fetch");
          // console.log(response.json());
          resolve(response.json());
          // return response.json();
          // console.log("resolved");
      });
    });
    //3
    // console.log("returning getProducts");
    return promise;
  }
}

export default HttpService;
