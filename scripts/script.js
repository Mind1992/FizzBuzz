$(document).ready(function(){
var userInput = parseInt(prompt("What number do you want to fizzbuzz up to ?"));

for (i = 1; i < userInput; i++){
	if (i%5 === 0 && i%3 === 0){
		$("#container").append("<p>FizzBuzz</p>")
	}

	else if (i%3 === 0) {
		$("#container").append("<p>Fizz</p>")
	}
	
	else if (i%5 === 0){
		$("#container").append("<p>Buzz</p>")
	}
	
	else{
		$("#container").append("<p>"+i+"</p>")
	}
};
});
