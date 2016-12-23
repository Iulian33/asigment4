(function(win){
	var message = "Goodby";
	function sayGoodby(name){
		console.log(message + " " + name);
	}
	window.sayGoodby = sayGoodby;
})(window);