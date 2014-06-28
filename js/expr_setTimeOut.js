(function() {

  function makeTimeoutFunc(param) {
      return function() {
          console.log('Hey');
      }

  }
  

  setTimeout(makeTimeoutFunc(), 5000);


})();
