/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.content = [];
  this.length = 0;
  this.push = function(ele) {
    this.content[this.length] = ele;
    this.length += 1;
  }
  this.pop = function() {
    const result = this.content[this.length];
    this.content.splice(this.content[this.length - 1], 1);
    this.length -= 1;
    return result;
  }
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
