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
	let temp = this.storage[this.storage.length];
	this.storage.pop();
	
	return temp;
}


/**
* Queue Class

without using a , you would just create a storage method
dequeue removes and returns first item
enquueue adds to end of quue








FIFO, LILO
*/




function Queue() {


}

;


//module.exports = {Stack: Stack, Queue: Queue};
