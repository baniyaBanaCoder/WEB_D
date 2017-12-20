var str="";
var todo=[];
function newAdd(){
	var k=prompt("Enter a Todo");
		todo.push(k);
		console.log("Todo Added");
}
function list(){
		console.log(todo);
		console.log("List shown");
}
function deletelist(){
	var num=prompt("Enter the index to be deleted");
		todo.splice(num,1);
		console.log("List deleted");
}
while(str !== "quit")
{
	str=prompt("What would you like to do");
	if(str === "new")
	{
		newAdd();
	}
	else if(str === "list")
	{
		list();
	}
	else if(str === "delete")
	{
		deletelist();
	}
}
alert("You quit the app");