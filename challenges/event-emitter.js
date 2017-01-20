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

class EventEmitter {
  constructor() {
    this.event = '';
    this.eventHandlers = [];
  }
  on(funcName, func) {
    this.event = funcName;
    this.eventHandlers.push(func);
  }
  trigger(funcName, ...args) {
    if (funcName === this.event) {
      this.eventHandlers.forEach(handler => {
        handler(...args);
      });
    }
  }
}

// let counter = 0;
// const myEventEmitter = new EventEmitter();

// myEventEmitter.on('increment', () => {
//   counter++
// });

// myEventEmitter.on('increment', () => {
//   console.log('another action');
// });

// myEventEmitter.trigger('increment');
// myEventEmitter.trigger('increment');
// myEventEmitter.trigger('increment');

// console.log(counter);


module.exports = EventEmitter;
