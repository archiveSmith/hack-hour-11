function drawStairs(n,  i = 1, sp = n){
	while(i++ <= n){console.log(Array(sp).join(" ") + Array(i).join("*")); sp--; }
}


module.exports = drawStairs;