// initial todo
var todos = ["Buy new turtle"];

// ask for new input
var input = prompt("What would you like to do?");

// after input is given
while(input !== "quit") {
	// handle input
	if(input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodo();
	} else if(input === "delete"){
		deleteTodo();
	}
	// ask again for new input
	input = prompt("What would you like to do?");
}

// quit the app
console.log("Ok, you quit the app.");

// list the todos
function listTodos(){
	console.log("**********");
	// list format- index: todo
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

// add a new todo
function addTodo(){
	// ask for new todo
	var newTodo = prompt("Enter a new todo");
	// add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}

// delete a todo
function deleteTodo(){
	// ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete.")
	// delete that todo using splice
	todos.splice(index, 1);
	console.log("Deleted Todo");
}