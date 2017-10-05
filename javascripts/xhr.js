"use strict";

const printToDom = require('./domWriter.js');

const catLoadWorks = function() {
	let catData = JSON.parse(this.responseText).cats;
	printToDom(catData);
};

const loadBroken = () => {
//console.log("Broken Load");
};

const catXHR = () => {
	let myCats = new XMLHttpRequest();
	myCats.addEventListener("load", catLoadWorks);
	myCats.addEventListener("load", loadBroken);
	// myCats.open("GET","./db/cats.json");
	myCats.open("GET","https://random-dogs-api.herokuapp.com/cats/15");
	myCats.send();
};

module.exports = catXHR;