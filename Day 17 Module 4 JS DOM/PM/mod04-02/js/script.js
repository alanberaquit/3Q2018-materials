function changeColor(e){
	let color = prompt();
	let item = e.target;
	item.innerHTML = color;
	item.style.background = color;
}

let div1 = document.getElementById("div1");
div1.addEventListener("click", changeColor)

let div2 = document.getElementById("div2");
div2.addEventListener("click", changeColor)

let div3 = document.getElementById("div3");
div3.addEventListener("click", changeColor)

let div4 = document.getElementById("div4");
div4.addEventListener("click", changeColor)

let div5 = document.getElementById("div5");
div5.addEventListener("click", changeColor)

let div6 = document.getElementById("div6");
div6.addEventListener("click", changeColor)



