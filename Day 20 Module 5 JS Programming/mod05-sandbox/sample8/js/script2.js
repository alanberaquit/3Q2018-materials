let heading = document.getElementById("mainHeading");
//Add an Event Listener. The first parameter is the kind of 
//event it will listen to
heading.addEventListener("click", function(){
	console.log("You clicked me");
	heading.style.color="green";
});
