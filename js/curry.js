// From Stoyan Stefanov, JavaScript Patterns
// O'Reilly, 2010, pp. 81-83

// a curried add()
// accepts partial list of arguments
function add(x,y) {
	var oldx = x, oldy = y;
	if (typeof oldy === "undefined") { // partial
		return function (newy) {
			return oldx + newy ;
		};
	}
	// full application 
	return x + y;
}

// test 
typeof add(5);   // "function"
add(3)(4);    // 7
var add2000 = add(2000);
add2000(10); // 2010
