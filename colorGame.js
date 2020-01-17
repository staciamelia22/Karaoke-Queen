var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode buttons event listeners
	setUpModeButtons();
	// square event listeners
	setUpSquares();
	reset();
};

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	};
};

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
	// add click listener to squares
		squares[i].addEventListener("click", function(){
			// grab color from clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor){
				// victory screen
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?"
				// change all sqauares to clicked square color
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				// wrong square disappears
				this.style.backgroundColor = "#232323";
				// defeat screen
				messageDisplay.textContent = "Try again";
			};
		});	
	};
};

function reset(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		};
	};
	h1.style.backgroundColor = "#42938f";	
};

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match picked color
		squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	// generate a random number
	var random = Math.floor(Math.random() * colors.length);
	// update pickedColor variable with random selection from colors array
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// return a "rgb(r, g, b)" string
	return "rgb(" + r + ", " + g + ", " + b + ")";
}