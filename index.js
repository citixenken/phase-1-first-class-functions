//1. receivesAFunction function
// function receivesAFunction(cb) {
//   return cb();
// }
const receivesAFunction = (cb) => cb();

//2. returnsANamedFunction
// function returnsANamedFunction() {
//   return function namedFunction() {
//     console.log("This is a named function.");
//   };
// }
const returnsANamedFunction = () => function namedFunction() {};

//3. returnsAnAnonymousFunction
// function returnsAnAnonymousFunction() {
//   return function () {
//     console.log("This is an anonymous function.");
//   };
// }
const returnsAnAnonymousFunction = () => function () {};
