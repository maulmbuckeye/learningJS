// David Herman, Effective JavaScript, pp. 44-46
// Item 13: Use Immediately Invoked Function
//          Expressions to Create Local Scopes

function wrapElements(a) {
	var result = [],i,n;
	for (i = 0, n = a.length; i < n; i++) {
		result[i] = function () {
			console.log(i);
			return a[i]; 
		}
	}
	return result;
}

var wrapped = wrapElements([10,20,30,40,50]);
var f = wrapped[0];
f();

function wrap2(a) {
	var result = [];
	for (var i = 0, n = a.length; i < n; i++) {
		(function () {
			var j = i;
			result[i] = function() {
				console.log("i=",i,"  j=",j);
				return a[j];
			};
		})();
	}
	return result;
}

var wrap2result = wrap2([10,20,30,40,50]);
wrap2result[0]();
wrap2result[4]();
 // this produces an error is wrap2result is undefined
 // and therefore cannot be invoked as a function
wrap2result[5](); 



