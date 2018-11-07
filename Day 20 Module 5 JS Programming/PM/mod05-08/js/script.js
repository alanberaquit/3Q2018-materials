let divs = document.querySelectorAll("div");

for(let i = 0; i < divs.length; i++){
	divs[i].addEventListener("click", function(e){
		let content = e.target.innerHTML;
		document.querySelector("#display").value += content;
		console.log(e.target);
	});
}