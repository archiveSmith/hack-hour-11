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
    this.storage = {};
}

EventEmitter.prototype.on = function(funcName, func) {
    // console.log(func.toString())
    if (!this.storage[funcName]) {
        this.storage[funcName] = [];
    } this.storage[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
    if (this.storage[funcName]) {
        for (let i=0; i<this.storage[funcName].length; i++) {
           // console.log('current', this.storage[funcName][i].toString())
            this.storage[funcName][i](...args);
        }
        
    } else {
        console.log('sorry ' + funcName + ' func was not in here');
    }
};


// var instance = new EventEmitter();
// var counter = 0;
// var counter2 = 0;
// instance.on('increment', function() {
//     counter++;
//     console.log(counter);
// })

// console.log('put in counter func')

// instance.on('increment', function() {
//     counter2++;
//     console.log(counter2);
// })

// // console.log(instance.storage)

// instance.trigger('increment');
// instance.trigger('increment');
// instance.trigger('hawaii')

module.exports = EventEmitter;
