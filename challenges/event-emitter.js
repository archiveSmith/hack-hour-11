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
<<<<<<< HEAD
  this.methods = {};
}

EventEmitter.prototype.on = function(funcName, func, ...args) {
  if (!this.methods.funcName) this.methods.funcName = [func];
  else {
    this.methods.funcName.push(func);
    this.methods.funcName.forEach(function(input) {
      return input();
    });
  }
  
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.methods.funcName.forEach(function(input) {
    return input();
  })
};

module.exports = EventEmitter;
=======

}

EventEmitter.prototype.on = function(funcName, func) {

};

EventEmitter.prototype.trigger = function(funcName, ...args) {

};

module.exports = EventEmitter;
>>>>>>> 1a7485c2a025fa8d3cb0d86037701456406ed848
