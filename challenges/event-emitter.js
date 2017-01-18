'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {

}

EventEmitter.prototype.on = function (funcName, func) {
  if (!this[funcName]) {
    this[funcName] = [];
  }
  this[funcName].push(func);
};

EventEmitter.prototype.trigger = function (funcName, ...args) {
  this[funcName].forEach(fn => fn(...args));
};

// var instance = new EventEmitter();
// var counter = 0;
// var otherCounter = 0;
// var x = 5;

// instance.on('increment', function () {
//   counter += 1;
// }); // counter should be 0
// instance.on('increment', function () {
//   otherCounter -= 1;
// });
// instance.on('x2', function (num) {
//   const newNum = num;
//   return newNum * 2;
// });
// console.log(instance);
// instance.trigger('increment');
// console.log('counter after first: ', counter); // counter should be 1
// console.log('otherCounter after first: ', otherCounter);
// instance.trigger('increment');
// console.log('counter after second: ', counter); // counter should be 2
// console.log('otherCounter after first: ', otherCounter);
// console.log(instance);
// console.log(instance.trigger('x2', x));
// console.log(x);

module.exports = EventEmitter;
