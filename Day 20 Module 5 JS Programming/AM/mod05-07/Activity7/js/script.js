let addItemBtn = document.querySelector("#btn1");
let items = ["eat", "sleep", "code"];

//Display the content of the the array
function displayContent(){
	items.forEach(function(item){
		document.querySelector("#output").innerHTML += "<li>"+item+"</li>";
	});
	arrInfo();
}

function arrInfo(){
	let arrLen = items.length;
	document.querySelector("#len").innerHTML = "<strong>" + arrLen + "</strong>";
	
	let arrFirstElement = items[0];
	document.querySelector("#first").innerHTML ="<strong>" + arrFirstElement + "</strong>";
	
	let arrLastElement = items.length-1;
	document.querySelector("#last").innerHTML = "<strong>" + items[arrLastElement] + "</strong>";
}

displayContent();

addItemBtn.addEventListener("click", addContent)
function addContent(){
	document.querySelector("#output").innerHTML = "";
	let input = document.querySelector("#input1").value;
	items.push(input);
	displayContent();
}