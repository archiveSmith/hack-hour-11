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
  // have a dictionary of events
  // key: event name
  // value: array of funcs
  this.events = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  // save funcName into events
  if (!this.events[funcName]) this.events[funcName] = [];
  this.events[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  for (let i = 0; i < this.events[funcName].length; i += 1) {
    this.events[funcName][i].apply(null, args);
  }
};

// var instance = new EventEmitter();
// var counter1 = 0;
// var counter2 = 0;
// instance.on('increment', function() {
//   counter1++;
// });
// instance.on('increment', function() {
//   counter2--;
// })
// instance.trigger('increment'); // counter should be 1
// instance.trigger('increment'); // counter should be 2
// console.log(counter1);
// console.log(counter2);

module.exports = EventEmitter;
