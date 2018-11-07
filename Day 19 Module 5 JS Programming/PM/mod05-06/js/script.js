//Prices for Pasa Load
const passTen = 10.00;
const passFifty = 50.00;
const passOneHundred = 100.00;

//Transaction Fee for Every Pasa load
const transactFee = 2.50;

//User's Account Balance
let accountBalance = parseInt(document.querySelector("#bal").innerHTML);

//get the cell number


//Display transaction history on this element
//let transactionHistory = document.querySelector("#transaction").innerHTML;

//function to check is user has enough money
function checkBalance(amt){
	let cellNumber = document.querySelector("#cellNum").value; 
	if(((accountBalance - amt) > 0.00) && (cellNumber != "")){
		return true;
	}else if(cellNumber == ""){
		alert("Enter a valid Cell Number");
		return false;
	}else{
		alert("Insufficient Balance");
		return false;
	}
}

function pasaTen(){
	if(checkBalance(passTen)){
		accountBalance = accountBalance - (passTen + transactFee);
		let cellNumber = document.querySelector("#cellNum").value;
		document.querySelector("#bal").innerHTML = accountBalance.toFixed(2);
		document.querySelector("#transaction").innerHTML += "&#8369; 10.00" + " is loaded to - " + cellNumber + "<br>";
	}
}

function pasaFifty(){
	if(checkBalance(passFifty)){
		accountBalance = accountBalance - (passFifty + transactFee);
		let cellNumber = document.querySelector("#cellNum").value;
		document.querySelector("#bal").innerHTML = accountBalance.toFixed(2);
		document.querySelector("#transaction").innerHTML += "&#8369; 50.00" + " is loaded to - " + cellNumber + "<br>";
	}
}

function pasaOneHundred(){
	if(checkBalance(passOneHundred)){
		accountBalance = accountBalance - (passOneHundred + transactFee);
		let cellNumber = document.querySelector("#cellNum").value;
		document.querySelector("#bal").innerHTML = accountBalance.toFixed(2);
		document.querySelector("#transaction").innerHTML += "&#8369; 100.00" + " is loaded to - " + cellNumber + "<br>";
	}
}

//Button for pasaTen
let btn10 = document.querySelector("#btn10");
btn10.addEventListener("click", pasaTen);

//Button for pasaFifty
let btn50 = document.querySelector("#btn50");
btn50.addEventListener("click", pasaFifty);

//Button for pasaTen
let btn100 = document.querySelector("#btn100");
btn100.addEventListener("click", pasaOneHundred);
