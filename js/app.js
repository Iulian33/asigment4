var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","Julian","Mike","janei"];
var lowerArray = new Array();


// My Solution for Filtring array names that starts with J and other
console.log("Then Output By condtions:");
	for(j in names){
		lowerArray[j] = names[j].toLowerCase();
	}
	for( var i in names){
		x = lowerArray[i];
		if (x[0] == "j") {
			sayGoodby(names[i]);
		}
		else{
			sayHelloTo(names[i]);
		}
	}