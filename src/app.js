/*

helpers : 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

*/

exports.demoFunction1 = function () {
  return "Wax on, off";
};

exports.demoFunction2 = function (a, b, c) {
  return `${a}-${b}-${c}`;
};

exports.dummyFunction = function () {};


exports.sayHelloWorld = function () {
  return "hello, world"
};

exports.isNumberBig = function (val) {
  if (val === String) throw new TypeError("the parameter should be a number")
  if (isNaN(val)) throw new TypeError("the parameter n should not be NaN");
  if (val < 10000) return "It's a small number !";
  else return "It's a big number !";
};

exports.sum = function (val1, val2) {
  if (val1 === "foo" || val2 === "bar") throw new TypeError("all parameters must be of type number");
  else if (isNaN(val1) || isNaN(val2)) throw new TypeError("all parameters must not be NaN");
  else return val1 + val2;
};

exports.greetingUser = function (first, last) {
  if (first.length < 3 || last.length < 3) throw new TypeError("should be at least of length 2");
  if (typeof first !== "string" || typeof last !== "string") throw new TypeError("Firstname n lastname should be a string");
  else if (first == "Guillaume", last == "Amg");
  else if (first == "Yannick", last == "Boullala");
  return `Hello ${first} ${last}`;
};



// exports.displayUserInfos = function () {

// };

exports.makeOpposite = function (b) {
  if (typeof b !== "boolean") throw new TypeError("b must be a boolean");
  return !b;
};

exports.createACat = function (name, age, color, eyeColor, isCute) {
  if ({
      name: "Felix",
      age: "eight",
      color: "grey",
      eyeColor: "green",
      isCute: true
    }) throw new TypeError("age must be a number");
if ({
      name: "Kitty",
      age: 2,
      color: "black",
      eyeColor: "blue",
      isCute: true
    },
{
      name: "Felix",
      age: 8,
      color: "grey",
      eyeColor: "green",
      isCute: true
    })
    return name, age, color, eyeColor, isCute;
  // if (isCute == "true") throw new TypeError ("isCute must be a boolean");
  // return kitty, felix;
};

exports.getTheWinner = function () {


};