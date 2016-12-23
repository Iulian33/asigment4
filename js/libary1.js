(function(win){
	var message = "Hello";
	function sayHelloTo(name){
		console.log(message + " " + name);
	}
	window.sayHelloTo = sayHelloTo;
})(window);