//isEven Function

// //*the long way*
// function isEven(num) {
// 	//return "true" if even
//     if(num % 2 === 0) {
//         return true;
//     }
//     //return "false" otherwise
//     else {
//     	return false
// 	}
// }

//*the shorter way* (this way is shorter because of the Boolean statement)
function isEven(num){
	return num % 2 === 0;
}


//factorial Function

// //*starting at "num" and going down until 1 is reached
// //*this way is longer because it has to account for a 0 factorial
// function factorial(num){
// 	//to assure that 0 factorial results in 1
// 	if(num === 0) {
// 		return 1;
// 	}
// 	//define a result variable
// 	var result = num;
// 	//calculate factorial and store value in result
// 	for(var i = num-1; i >= 1; i--){
// 		result *= i;
// 	}
// 	//return the result variable
// 	return result;
// }

//*starting at 1 and going up until "num" is reached
function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	//return the result variable
	return result;
}


//kebabToSnake Function

function kebabToSnake(str){
	//replace all dashes with underscores and capture that result and store it in newStr
	//this uses the RegEx with a g flag
	var newStr = str.replace(/-/g , "_");
	//return updated string
	return newStr;
}