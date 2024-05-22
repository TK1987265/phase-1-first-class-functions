// index.js

function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
      // Function body
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
    return function() {
      // Function body
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  