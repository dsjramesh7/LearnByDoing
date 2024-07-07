//promise is object in js
// three state pending, resolve/fullfilled , reject

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise object");
//   resolve("success");
// });

// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });



function myOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnSetTimeout(3000).then(function () {
  console.log("log the first thing");
});
