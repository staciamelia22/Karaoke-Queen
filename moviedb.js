var movies = [
	{
		title: "Kill Bill Vol. 1",
		rating: "5 Stars",
		hasWatched: true,
	},
	{
		title: "Ready Player One",
		rating: "5 Stars",
		hasWatched: false,
	},
	{
		title: "Black Panther",
		rating: "5 Stars",
		hasWatched: true,
	},
	{
		title: "Training Day",
		rating: "4 Stars",
		hasWatched: true,
	},
]

// **Having everything in the .forEach loop**

// movies.forEach(function(movie){
// 	var result = "You have ";
// 	if(movie.hasWatched){
// 		result += "watched ";
// 	} else {
// 		result+= "not seen ";
// 	}
// 	result += "\"" + movie.title + "\" - ";
// 	result += movie.rating;
// 	console.log(result);
// });

// **Having the logic in a separate function that will be called on in the .forEach loop**

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result+= "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating;
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
})