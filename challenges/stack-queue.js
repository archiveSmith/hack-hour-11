/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	//push and pop props
	this.storage = [];
	

}

Stack.prototype.push = function(val){
	this.storage.push(val);

	

}

Stack.prototype.pop = function(){
	//let temp = this.storage[this.storage.length];
	this.storage.pop();
	
	//return temp;
}

// let poop = new Stack();
// poop.push(4);
// poop.push(1);
// poop.push(11);
// poop.pop();

//console.log(poop.storage)

/**
* Queue Class
create an inbox stack
and outbox stack

to enquque just add to the inbox

to dequaure, push them all to the outbox then pop off the top

then return them all to the inbox.




FIFO, LILO
*/




function Queue() {


}

Queue.prototype.enquque = function(val) {
	this.inbox = new Stack();
	this.outbox = new Stack();
	this.inbox.push(val);

}

Queue.prototype.deque = function () {

	this.inbox = new Stack();
	this.outbox = new Stack();

	if (this.inbox.storage.length < 1){
		//let temp = this.inbox.storage[0];
		this.inbox.pop();
		// return temp;
	}

	while (this.inbox.storage.length > 0){
		this.outbox.push(this.inbox.pop())

	}
	this.outbox.pop();
}


let lins = new Queue();

lins.enquque(4);
lins.enquque(2);
lins.enquque(11);
console.log(lins.deque());


//module.exports = {Stack: Stack, Queue: Queue};
