let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", loop);
let strInput1 = "";

function loop(){

let input1 = parseInt(document.querySelector("#num1").value);
let input2 = parseInt(document.querySelector("#num2").value);

	if(input1 > input2){
		alert("First number is greater than the second!")
	}

	else{
		while(input1 <= input2){
		strInput1 += input1 + "<br>";
		input1++;
	}
	document.querySelector("#while").innerHTML = strInput1;
	
	do{
		strInput1 += input1 + "<br>";
		console.log(input1)
		input1++;
	}
	while(input1 <= input2)
		document.querySelector("#doWhile").innerHTML = strInput1;
	
	for(input1; input1 <= input2; input1++) {
  		strInput1 += input1 + "<br>";
	}
	document.querySelector("#forLoop").innerHTML = strInput1;
	}
}