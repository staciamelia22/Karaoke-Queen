// PLAYER ONE VARS
var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;
// PLAYER TWO VARS
var p2Button = document.getElementById("p2");
var p2Display = document.getElementById("p2Display");
var p2Score = 0;
// WINNING SCORE VARS
var winningScoreDisplay = document.querySelector("p span");
var winningScore = 5;
// INPUT, RESET AND GAME OVER VARS
var numInput = document.querySelector("input");
var resetButton = document.getElementById("reset");
var gameOver = false;

// IF PLAYER ONE GAINS A POINT
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

// IF PLAYER TWO GAINS A POINT
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

// RESET FUNCTION
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

// IF THE GAME IS RESET
resetButton.addEventListener("click", function(){
	reset();
});	

// IF THE WINNING SCORE IS UPDATED AND THE GAME IS RESET
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});


