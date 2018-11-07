let btn1= document.querySelector("#one");
let btn2= document.querySelector("#two");
let btn3= document.querySelector("#three");

btn1.addEventListener("click",getContent);
btn2.addEventListener("click",getContent);
btn3.addEventListener("click",getContent);

function getContent(e){
	let content = e.target.innerHTML;
	alert(content);
};

