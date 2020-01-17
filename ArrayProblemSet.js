// printReverse()
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

console.log("PRINT THE ARRAY [1,2,3] IN REVERSE");
console.log(printReverse([1,2,3]));



// isUniform()
function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

console.log("PRINT TRUE FOR THE ARRAY [1,1,1]");
console.log(isUniform([1,1,1]));

console.log("PRINT FALSE FOR THE ARRAY [1,2,1]");
console.log(isUniform([1,2,1]));



// sumArray()
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

console.log("PRINT THE SUM OF THE ARRAY [1,2,3]");
console.log(sumArray([1,2,3]));



// max()
function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

console.log("PRINT THE MAX ELEMENT IN THE ARRAY [5,12,3,90]");
console.log(max([5,12,3,90]));