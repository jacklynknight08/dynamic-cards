"use strict";
console.log("Dynamic Cards");

var button = document.getElementById("button");
var input = document.getElementById("input");
var output = document.getElementById("output");


//when this button is clicked, trigger this function that will create a card with a clear button and output it to the DOM
button.addEventListener("click", function(event){
	output.innerHTML += `<div class="style-card">${input.value}<button type="button" id="clear">Clear</button></div>`;
});

//when the clear button is clicked in the dom, target that specific card and remove it completely from the DOM
//.toLowerCase has to be there in order for it to work
output.addEventListener("click", function(event){
	if(event.target.tagName.toLowerCase() === "button")
		output.removeChild(event.target.parentElement);
});
