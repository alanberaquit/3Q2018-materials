function rightTriangle(x){
console.log(x);
console.log(x+x);
console.log(x+x+x);
console.log(x+x+x+x);
console.log(x+x+x+x+x);
console.log(x+x+x+x+x+x);
}


function getInput(){
	let input1 = document.querySelector("#input1").value;
	console.log(input1);
}

let btn = document.querySelector("btn");
btn.addEventListener("click", getInput);

var x = a => console.log("Monica" + a)