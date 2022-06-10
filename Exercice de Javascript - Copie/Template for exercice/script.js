// Callback Function Example

function great(name, callback) {
  console.log("Hey Word l");
  // callback function
  // executed only after the greet() is executed
  callback(name);
}
// callback function
function callback(name) {
  console.log("Hey" + name);
}

// calling the function after 2 seconds

setTimeout(great, 2000, "John", callback);
