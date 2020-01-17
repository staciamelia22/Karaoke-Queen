// LONG VERSION
// var button = document.querySelector("button");
// var body = document.querySelector("body");
// var isBlue = false;

// button.addEventListener("click", function() {
// 	// if white, make it blue
// 	if(isBlue){
// 		body.style.background = "white";
// 	// if blue, make it white
// 	} else {
// 		body.style.background = "blue";
// 	}
// 	isBlue = !isBlue;
// });

// // SHORT VERSION
var button = document.querySelector("button");

button.addEventListener("click", function(){
	document.body.classList.toggle("blue");
});