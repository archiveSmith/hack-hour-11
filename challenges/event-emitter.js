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

// function EventEmitter() {
// }

// EventEmitter.prototype.on = function(funcName, func) {
// 	console.log('A:','trigger hit');
//  	return func();
// };


function EventEmitter(){

}
eventEmitter.prototype.on = function(eventName, func){
	if(!this[eventName]) this[eventName] =[];
	this[eventName].push(func)
}

EventEmitter.prototype.trigger = function (eventName, ...args){
	if(!this[eventName])return false
	for(leti=0;i<this[eventName.length;i++]){
			this[eventName][i](...args)
	}
}


// EventEmitter.prototype.trigger = function(funcName, ...args) {
// 	console.log('B:',"trigger");
// 	if(args === []){
// 		return EventEmitter.on(funcName);	
// 	}else if(args === undefined){
// 	 return EventEmitter.on(funcName);
// 	}else{
// 		return EventEmitter.on(funcName);
// 	}
	
// };

// var instance = new EventEmitter();
// var counter = 0;
// var count = 0;
// var count_2 = 0;

// instance.on('increment', function() {counter++;}); 
// instance.on('increment',function() {count++;});
// instance.on('increment',function() {count_2++;});

// instance.trigger('increment'); // counter should be 1
// instance.trigger('increment'); // counter should be 2

// console.log('counter', counter)
// console.log('count', count)
// console.log('count_2', count_2)

module.exports = EventEmitter;
