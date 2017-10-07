"use strict";

const printToDom = require('./domWriter.js');

const catLoadWorks = function() {
	let catData = JSON.parse(this.responseText).cats;
	printToDom(catData);
};

const loadBroken = () => {
	alert("Broken Load");
};

const catXHR = (numOfCats) => {
	let myCats = new XMLHttpRequest();
	myCats.addEventListener("load", catLoadWorks);
	myCats.addEventListener("load", loadBroken);
	myCats.open("GET",`https://random-dogs-api.herokuapp.com/cats/${numOfCats}`);
	myCats.send();
};

module.exports = catXHR;