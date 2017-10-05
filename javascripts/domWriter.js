"use strict";

var $ = require("../lib/node_modules/jquery/dist/jquery.js");

const printToDom = (data) => {
	// const stuff = document.getElementById("cats-holder");
	let output = "";
	for ( let i = 0; i < data.length; i++ ) {
		output += '<div class="cat-card col-md-2 col-sm-2 col-xs-2">';
		output +=    '<div class="image-container">';
		output +=      `<img src="${data[i].imageUrl}">`;
		output +=    '</div>';
		output +=    '<div class="description-container">';
		output +=      `<h3> ${data[i].name} </h3>`;
		output +=      `<p> Color: ${data[i].color} </p>`;
		output +=      `<p> Skills: ${data[i].specialSkill} </p>`;
		let numOfToes = data[i].numberOfToes;
		if (numOfToes < 10) {
			output +=      `<p class="disabled-cat"> Toes: ${numOfToes} </p>`;
		} else {
			output +=      `<p class="normal-cat"> Toes: ${numOfToes} </p>`;	
		}
		output +=    '</div>';
		output +=  	 `<p>cat #: ${i + 1}</p>`;
		output +=  '</div>';
	}
	// stuff.innerHTML = output;
	console.log(output);
	$("div#cats-holder").append(output);
};

module.exports = printToDom;